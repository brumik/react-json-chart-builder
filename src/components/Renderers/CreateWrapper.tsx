import React, { FunctionComponent, useState } from 'react';
import {
    Chart as PFChart,
    ChartAxis,
    ChartVoronoiContainer,
    createContainer
} from '@patternfly/react-charts';
import {
    ChartApiData,
    ChartData,
    ChartKind,
    ChartSchema,
    ChartSchemaElement,
    ChartSimple,
    ChartType,
    ChartWrapper
} from '../types';
import createChart from './createChart';
import createGroup from './createGroup';
import createStack from './createStack';
import {
    getBarWidthFromData,
    getLabels
} from '../Common/helpers';
import ResponsiveContainer from '../Common/ResponsiveContainer';
import {
    getInteractiveLegendForMultiSeries as getInteractiveLegend, getLegendProps
} from '../Common/getLegendProps';

const components: Partial<Record<ChartKind, (
    id: number,
    data: ChartSchema,
    resolvedApi: ChartApiData
) => React.ReactElement>> = {
    [ChartKind.group]: createGroup,
    [ChartKind.stack]: createStack,
    [ChartKind.simple]: createChart
};

interface Props {
    id: number,
    data: ChartSchema
}

interface PaddingProps { top?: number, bottom?: number, left?: number, right?: number }

const getDomainPadding = (
    data: ChartData,
    child: ChartSchemaElement
): number => {
    switch (child.kind) {
        case ChartKind.simple:
            return child.type === ChartType.bar ? 20 : 0;
        case ChartKind.group:
            return child.template && child.template.type === ChartType.bar
                ? getBarWidthFromData(data) * data.length / 2
                : 0
        default:
            return 0;
    }
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

const getMinMaxFromData = (data: ChartData, dataKeys: string[]): [number, number] => {
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

const getOffsetY= (ticks: number[], height: number, padding: PaddingProps): number =>
    (
        (height - padding.top - padding.bottom) /
        (ticks.length - 1)
    ) * ticks.filter(n => n < 0).length;
/* End Domain Functions */

const paddingNumberToObject = (padding: PaddingProps | number): PaddingProps => (isNaN(+padding))
    ? padding as PaddingProps
    : {
        top: padding as number,
        bottom: padding as number,
        left: padding as number,
        right: padding as number
    };

const CreateWrapper: FunctionComponent<Props> = ({
    id,
    data
}) => {
    const { charts, functions } = data;
    const wrapper = charts.find(({ id: i }) => i === id) as ChartWrapper;
    const children = charts.filter(({ parent }) => parent === wrapper.id);
    const [width, setWidth] = useState(0);
    const [resolvedApi, setResolvedApi] = useState({
        data: []
    } as ChartApiData);

    const props = {
        height: 300,
        ...wrapper.props,
        ...wrapper?.props?.padding
            ? { padding: paddingNumberToObject(wrapper.props.padding) }
            : { padding: {
                top: 10,
                left: 70,
                bottom: 70,
                right: 10
            }}
    }

    let legendProps = getLegendProps(wrapper, resolvedApi)
    if (wrapper.legend?.interactive) {
        legendProps = {
            ...legendProps,
            legendComponent: getInteractiveLegend(wrapper, resolvedApi, setResolvedApi)
        }
        delete legendProps.legendData;
    }

    let labelProps = {};
    if (wrapper.tooltip) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const ContainerComponent = wrapper.tooltip.cursor
            ? createContainer('voronoi', 'cursor')
            : ChartVoronoiContainer;

        labelProps = {
            containerComponent: <ContainerComponent
                cursorDimension={wrapper.tooltip?.stickToAxis}
                constrainToVisibleArea
                labels={getLabels(wrapper.tooltip.customFnc)}
                mouseFollowTooltip={wrapper.tooltip?.mouseFollow}
                voronoiDimension={wrapper.tooltip?.stickToAxis}
            />
        }
    }

    /* calculations for y axis with negative values */
    const dataKeys: string[] = getAllDisplayedValues(data.charts);
    const minMaxValue: [number, number] = getMinMaxFromData(resolvedApi.data, dataKeys);
    const yTicks: number[] = getTicksFromMinMax(minMaxValue);
    const yDomain: [number, number] = getDomainFromTicks(yTicks);
    const xOffsetY: number = getOffsetY(yTicks, props.height, props.padding);
    /* end of caluclations */

    const xAxis = {
        fixLabelOverlap: true,
        ...minMaxValue[0] < 0 && { offsetY: xOffsetY },
        ...wrapper.xAxis,
        ...wrapper.xAxis.tickFormat && { tickFormat: functions.axisFormat[wrapper.xAxis.tickFormat] }
    };

    const yAxis = {
        ...minMaxValue[0] < 0 && {
            domain: yDomain,
            tickValues: yTicks.slice(1, -1)
        },
        ...wrapper.yAxis,
        tickFormat: functions.axisFormat[wrapper.yAxis.tickFormat]
    };

    return (
        <ResponsiveContainer
            setWidth={setWidth}
            height={props.height}
            api={wrapper.api}
            setData={setResolvedApi}
            fetchFnc={functions.fetchFnc}
        >
            {resolvedApi.data.length > 0 && <PFChart
                {...legendProps}
                // Get the domain padding if it has a grouped bar chart from template or a bar chart
                domainPadding={children.length === 1 ? getDomainPadding(resolvedApi.data, children[0]) : 0}
                {...props}
                key={id}
                width={width}
                {...labelProps}
            >
                <ChartAxis {...xAxis} />
                <ChartAxis dependentAxis {...yAxis} />
                {children && children.map(child => components[child.kind](child.id, data, resolvedApi))}
            </PFChart>}
        </ResponsiveContainer>
    );
};

export default CreateWrapper;
