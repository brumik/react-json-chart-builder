import {
    getInteractiveLegendItemStyles,
    ChartLegend,
    ChartLabel
} from '@patternfly/react-charts';
import { Tooltip } from '@patternfly/react-core';
import React from 'react';
import {
    ChartApiData,
    ChartLegendData,
    ChartLegendPosition,
    ChartPie,
    ChartTopSchemaElement,
    ChartLegendOrientation,
    LegendTooltipProps,
    PaddingProps
} from '../types';

export type LegendComponentType = React.ReactElement<typeof ChartLegend>;

const LegendWithTooltip = ({ datum, ...rest }: LegendTooltipProps) => (
    <Tooltip content={datum.name} enableFlip>
        <ChartLabel {...rest} />
    </Tooltip>
)

const getChartLegend = (
    id: number,
    legend: ChartLegendData,
    isHidden: (i: number) => boolean,
    handleClick: (props: { index: number }) => void,
    hasTooltip = true
): LegendComponentType => (
    <ChartLegend
        name={`legend-${id}`}
        data={legend.map((el, index) => ({
            ...el,
            ...getInteractiveLegendItemStyles(isHidden(index))
        }))}
        style={{
            labels: {
                cursor: 'pointer'
            }
        }}
        events={[{
            target: 'labels',
            eventHandlers: {
                onClick: () => [
                    {
                        target: 'data',
                        mutation: (props) => {
                            handleClick(props);
                            return null;
                        }
                    }
                ]
            }
        }]}
        labelComponent={hasTooltip ? <LegendWithTooltip /> : <ChartLabel />}
    />
)


export const getInteractiveLegendForMultiSeries = (
    element: ChartTopSchemaElement,
    chartData: ChartApiData,
    setData: (data: ChartApiData) => void
): LegendComponentType => {
    const handleClick = ({ index }: { index: number }) => {
        // Don't allow hiding ALL the series
        const hiddenCount = chartData.data.filter(({ hidden }) => hidden).length;
        if (
            !chartData.data[index].hidden &&
            chartData.data.length === hiddenCount + 1
        ) {
            return;
        }

        // Set the charts data in it too
        const tempData = [...chartData.data];
        tempData[index].hidden = !tempData[index].hidden;
        setData({
            ...chartData,
            data: tempData
        })
    };

    const isHidden = (idx: number) =>
        chartData.data[idx].hidden

    return element.legend && chartData.legend
        ? getChartLegend(
            element.id,
            chartData.legend,
            isHidden,
            handleClick,
            element?.legend?.hasTooltip
        )
        : null;
};

export const getInteractiveLegendForSingleSeries = (
    element: ChartPie,
    serie: Record<string, string | number | boolean>[],
    setSerie: (serie: Record<string, string | number | boolean>[]) => void,
    chartData: ChartApiData
): LegendComponentType => {
    const handleClick = ({ index }: { index: number }) => {
        // Don't allow hiding ALL the series
        const hiddenCount = serie.filter(({ hidden }) => hidden).length;
        if (
            !serie[index].hidden &&
            serie.length === hiddenCount + 1
        ) {
            return;
        }

        // Set the charts data in it too
        const tempData = [...serie];
        tempData[index].hidden = !tempData[index].hidden;
        setSerie(tempData);
    };

    const isHidden = (idx: number): boolean =>
        !!serie[idx]?.hidden;

    return element.legend && chartData.legend
        ? getChartLegend(
            element.id,
            chartData.legend,
            isHidden,
            handleClick,
            element?.legend?.hasTooltip
        )
        : null;
};

interface LegendProps {
    padding?: { top: number, bottom: number, left: number, right: number },
    legendData?: ChartLegendData,
    legendPosition?: ChartLegendPosition,
    legendOrientation?: ChartLegendOrientation,
    legendComponent?: LegendComponentType,
    domainPadding?: number,
}

export const getLegendProps = (
    element: ChartTopSchemaElement,
    chartData: ChartApiData,
    originalPadding: PaddingProps
): LegendProps => {
    let props: LegendProps = {
        padding: originalPadding
    };
    if (element.legend) {
        const { legend } = element;
        if (
            legend.position === ChartLegendPosition.bottom ||
            legend.position === ChartLegendPosition.right
        ) {
            props.padding[legend.position] += 100;
        }

        if (
            legend.position === ChartLegendPosition.bottom
        ) {
            element.props.height += 100;
        }

        props = {
            ...props,
            ...legend.position && { legendPosition: legend.position },
            ...legend.orientation && { legendOrientation: legend.orientation },
            legendData: chartData.legend
        }
    }

    return props;
};