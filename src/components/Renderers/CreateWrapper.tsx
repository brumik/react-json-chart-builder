import React, { FunctionComponent, useState } from 'react';
import {
  Chart as PFChart,
  ChartAxis,
  ChartLabel,
  ChartLegendTooltip,
  ChartVoronoiContainer,
  createContainer
} from '@patternfly/react-charts';
import {
  ChartData,
  ChartDataSerie,
  ChartKind,
  ChartInterface,
  ChartSchemaElement,
  ChartSimple,
  ChartType,
  ChartWrapper
} from '../types';
import createChart from './createChart';
import createGroup from './createGroup';
import createStack from './createStack';
import {
  axisFormatPreprocess,
  getBarWidthFromData,
  paddingNumberToObject
} from '../Common/helpers';
import ResponsiveContainer from '../Common/ResponsiveContainer';
import {
  getInteractiveLegendForMultiSeries as getInteractiveLegend, getLegendProps
} from '../Common/getLegendProps';
import { ChartAxisFormatFunctionNames, ChartLabelFormatFunctionNames } from '../Functions';

const components: Partial<Record<ChartKind, (
  id: number,
  data: ChartInterface,
  resolvedApi: ChartData,
  width: number
) => React.ReactElement>> = {
  [ChartKind.group]: createGroup,
  [ChartKind.stack]: createStack,
  [ChartKind.simple]: createChart
};

interface Props extends ChartInterface {
  id: number,
}

const getDomainPadding = ({ data, charts, width }: {
  data: ChartDataSerie[],
  charts: ChartSchemaElement[],
  width: number
}): number => {
  const simpleCharts = charts.filter(({ kind }) => kind === ChartKind.simple) as ChartSimple[];
  return simpleCharts.some(({ type }) => type !== ChartType.bar)
    ? 0
    : getBarWidthFromData(data, width) * data.length / 2;
}

/* Domain functions */
const getAllDisplayedValues = (charts: ChartSchemaElement[]): string[] =>
  (charts.filter(
    ({ kind }) => kind === ChartKind.simple) as ChartSimple[]
  ).map(({ props }) => props?.y as string ?? 'y');

const getNiceNumber = (n: number): number => {
  const rounded = Math.pow(10, Math.floor(Math.log10(Math.abs(n)))) / 2;
  return rounded === 0 ?
    0 :
    rounded * Math.ceil(Math.abs(n) / rounded);
}

const getMinMaxFromData = (data: ChartDataSerie[], dataKeys: string[]): [number, number] => {
  let maxInAnyData = 1;
  let minInAnyData = 0;

  data.map(({ serie, hidden }) => {
    if (hidden) return;

    serie.map(el => {
      dataKeys.forEach((key) => {
        if (!isNaN(+el[key])) {
          if (el[key] > 0) {
            maxInAnyData = Math.max(maxInAnyData, getNiceNumber(+el[key]));
          } else {
            minInAnyData = Math.min(minInAnyData, -getNiceNumber(+el[key]));
          }
        }
      });
    });
  });

  return [minInAnyData, maxInAnyData];
}

const getTicksFromMinMax = (minMaxValue: [number, number]): number[] => {
  // I don't know why it works only with the power of 2...
  const no = Math.pow(2, 3);
  const interval = Math.abs(minMaxValue[0]) + Math.abs(minMaxValue[1]);
  const ticksInterval = interval / no + 1;

  const ticks: number[] = [];
  let currTick = 0;
  while (currTick > minMaxValue[0] - ticksInterval) {
    currTick -= ticksInterval;
  }

  while (currTick < minMaxValue[1]) {
    currTick += ticksInterval;
    ticks.push(currTick);
  }

  return ticks;
}

const getDomainFromTicks = (ticks: number[]): [number, number] => [ticks[0], ticks[ticks.length - 1]];
/* End Domain Functions */

const CreateWrapper: FunctionComponent<Props> = ({
  id,
  schema,
  functions,
  dataState
}) => {
  const wrapper = schema.find(({ id: i }) => i === id) as ChartWrapper;
  const children = schema.filter(({ parent }) => parent === wrapper.id);
  const [data, setData] = dataState;
  const [width, setWidth] = useState(0);

  const props = {
    height: 300,
    ...wrapper.props,
    ...wrapper?.props?.padding
      ? { padding: paddingNumberToObject(wrapper.props.padding) }
      : { padding: {
        bottom: 70,
        left: 70,
        right: 50,
        top: 50
      }}
  }

  let legendProps = getLegendProps(wrapper, data, props.padding);
  if (wrapper.legend?.interactive) {
    legendProps = {
      ...legendProps,
      legendComponent: getInteractiveLegend(wrapper, data, setData)
    }
    delete legendProps.legendData;
  }

  let labelProps = {};
  if (wrapper.tooltip) {
    const tooltip = wrapper.tooltip;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const ContainerComponent = tooltip.cursor
      ? createContainer('voronoi', 'cursor')
      : ChartVoronoiContainer;

    labelProps = {
      containerComponent: <ContainerComponent
        cursorDimension={tooltip.stickToAxis}
        labels={functions.labelFormat[
          tooltip.labelFormat ?? ChartLabelFormatFunctionNames.default
        ]}
        voronoiPadding={props.padding}
        {...tooltip.legendTooltip && {
          labelComponent: (<ChartLegendTooltip
            legendData={tooltip.legendTooltip.legendData ?? data.legend}
            {...tooltip.legendTooltip.titleProperyForLegend && {
              title: (datum: Record<string, string>) =>
                datum[tooltip.legendTooltip.titleProperyForLegend]
            }}
          />)
        }}
        voronoiDimension={tooltip.stickToAxis}
        mouseFollowTooltips={tooltip.mouseFollow}
        constrainToVisibleArea
      />
    }
  }

  /* calculations for y axis with negative values */
  const dataKeys: string[] = getAllDisplayedValues(schema);
  const minMaxValue: [number, number] = getMinMaxFromData(data.series, dataKeys);
  const yTicks: number[] = getTicksFromMinMax(minMaxValue);
  const yDomain: [number, number] = getDomainFromTicks(yTicks);
  const xOffsetY: number = props.padding.bottom;
  /* end of caluclations */

  const { labelProps: xLabelProps, ...xAxisProps } = wrapper.xAxis;
  const xAxis = {
    fixLabelOverlap: true,
    tickLabelComponent: <ChartLabel {...xLabelProps} />,
    ...minMaxValue[0] < 0 && { offsetY: xOffsetY },
    ...xAxisProps,
    tickFormat: axisFormatPreprocess({
      wrapText: xAxisProps.wrapText,
      turncateAtNumber: xAxisProps.turncateAt,
      fnc: functions.axisFormat[xAxisProps.tickFormat ?? ChartAxisFormatFunctionNames.default]
    })
  };

  const { labelProps: yLabelProps, ...yAxisProps } = wrapper.yAxis;
  const yAxis = {
    tickLabelComponent: <ChartLabel {...yLabelProps} />,
    ...minMaxValue[0] < 0 && {
      domain: yDomain,
      tickValues: yTicks.slice(1, -1)
    },
    ...yAxisProps,
    tickFormat: axisFormatPreprocess({
      wrapText: yAxisProps.wrapText,
      turncateAtNumber: yAxisProps.turncateAt,
      fnc: functions.axisFormat[yAxisProps.tickFormat ?? ChartAxisFormatFunctionNames.default]
    })
  };

  return (
    <ResponsiveContainer
      setWidth={setWidth}
      height={props.height}
    >
      {data.series.length > 0 && <PFChart
        // Get the domain padding if it has a grouped bar chart from template or a bar chart
        domainPadding={children.length === 1
          ? getDomainPadding({
            data: data.series,
            charts: schema,
            width: width - props.padding.left - props.padding.right
          }) : 0}
        {...props}
        {...legendProps}
        {...labelProps}
        key={id}
        width={width}
      >
        <ChartAxis {...xAxis} />
        <ChartAxis dependentAxis {...yAxis} />
        {children && children.map(child => components[child.kind](
          child.id,
          { schema, functions, dataState },
          data,
          width - props.padding.left - props.padding.right
        ))}
      </PFChart>}
    </ResponsiveContainer>
  );
};

export default CreateWrapper;
