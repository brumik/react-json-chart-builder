import {
  ChartLabel,
  ChartLegend,
  ChartLabelProps as PFChartLabelProps,
  getInteractiveLegendItemStyles,
} from "@patternfly/react-charts";
import { Tooltip } from "@patternfly/react-core";
import React from "react";
import {
  ChartData,
  ChartLegendEntry,
  ChartPie,
  ChartTopSchemaElement,
  PaddingProps,
} from "../types";
import { turncateAt, wrapAt } from "./helpers";

export type LegendComponentType = React.ReactElement<typeof ChartLegend>;
interface LegendTooltipProps extends PFChartLabelProps {
  datum?: Record<string, unknown>;
}

const LegendWithTooltip = ({ datum, ...rest }: LegendTooltipProps) => (
  <Tooltip
    content={datum.tooltipText as string}
    triggerRef={() =>
      document.getElementById((rest as { text: string }).text.toString())
    }
    enableFlip
  >
    <ChartLabel {...rest} id={(rest as { text: string }).text.toString()} />
  </Tooltip>
);

const getLegendName = ({
  name,
  turncateAtNumber,
  wrapText,
}: {
  name: string;
  turncateAtNumber?: number;
  wrapText?: boolean;
}) =>
  wrapText
    ? wrapAt(name, turncateAtNumber)
    : turncateAt(name, turncateAtNumber);

const getChartLegend = (
  id: number,
  legend: ChartLegendEntry[],
  isHidden: (i: number) => boolean,
  handleClick: (props: { index: number }) => void,
  turncateAtNumber = Infinity,
  wrapText = false,
  hasTooltip = true
): LegendComponentType => (
  <ChartLegend
    name={`legend-${id}`}
    data={legend.map((el, index) => ({
      tooltipText: el.name, // This one is overwritable
      ...el,
      name: getLegendName({ name: el.name, turncateAtNumber, wrapText }),
      ...getInteractiveLegendItemStyles(isHidden(index)),
    }))}
    style={{
      labels: {
        cursor: "pointer",
      },
    }}
    events={[
      {
        target: "labels",
        eventHandlers: {
          onClick: () => [
            {
              target: "data",
              mutation: (props) => {
                handleClick(props);
                return null;
              },
            },
          ],
        },
      },
    ]}
    labelComponent={hasTooltip ? <LegendWithTooltip /> : <ChartLabel />}
  />
);

export const getInteractiveLegendForMultiSeries = (
  element: ChartTopSchemaElement,
  chartData: ChartData,
  setData: (data: ChartData) => void
): LegendComponentType => {
  const handleClick = ({ index }: { index: number }) => {
    // Don't allow hiding ALL the series
    const hiddenCount = chartData.series.filter(({ hidden }) => hidden).length;
    if (
      !chartData.series[index].hidden &&
      chartData.series.length === hiddenCount + 1
    ) {
      return;
    }

    // Set the charts data in it too
    const tempData = [...chartData.series];
    tempData[index].hidden = !tempData[index].hidden;
    setData({
      ...chartData,
      series: tempData,
    });
  };

  const isHidden = (idx: number) => chartData.series[idx].hidden;

  return element.legend && chartData.legend
    ? getChartLegend(
        element.id,
        chartData.legend,
        isHidden,
        handleClick,
        element?.legend?.turncateAt,
        element?.legend?.wrapText,
        element?.legend?.hasTooltip
      )
    : null;
};

export const getInteractiveLegendForSingleSeries = (
  element: ChartPie,
  serie: Record<string, string | number | boolean>[],
  setSerie: (serie: Record<string, string | number | boolean>[]) => void,
  chartData: ChartData
): LegendComponentType => {
  const handleClick = ({ index }: { index: number }) => {
    // Don't allow hiding ALL the series
    const hiddenCount = serie.filter(({ hidden }) => hidden).length;
    if (!serie[index].hidden && serie.length === hiddenCount + 1) {
      return;
    }

    // Set the charts data in it too
    const tempData = [...serie];
    tempData[index].hidden = !tempData[index].hidden;
    setSerie(tempData);
  };

  const isHidden = (idx: number): boolean => !!serie[idx]?.hidden;

  return element.legend && chartData.legend
    ? getChartLegend(
        element.id,
        chartData.legend,
        isHidden,
        handleClick,
        element?.legend?.turncateAt,
        element?.legend?.wrapText,
        element?.legend?.hasTooltip
      )
    : null;
};

interface LegendProps {
  padding?: { top: number; bottom: number; left: number; right: number };
  legendData?: ChartLegendEntry[];
  legendPosition?: "bottom" | "right";
  legendOrientation?: "horizontal" | "vertical";
  legendComponent?: LegendComponentType;
  domainPadding?: number;
}

export const getLegendProps = (
  element: ChartTopSchemaElement,
  chartData: ChartData,
  originalPadding: PaddingProps
): LegendProps => {
  let props: LegendProps = {
    padding: originalPadding,
  };

  if (element.legend) {
    const { legend } = element;
    if (legend.position === "bottom" || legend.position === "right") {
      props.padding[legend.position] += 100;
    }

    if (legend.position === "bottom") {
      element.props.height += 100;
    }

    props = {
      ...props,
      ...(legend.position && { legendPosition: legend.position }),
      ...(legend.orientation && { legendOrientation: legend.orientation }),
      legendData: chartData.legend.map((el) => ({
        ...el,
        name: getLegendName({
          name: el.name,
          turncateAtNumber: element?.legend?.turncateAt ?? Infinity,
          wrapText: element?.legend?.wrapText,
        }),
      })),
    };
  }

  return props;
};
