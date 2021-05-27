import React from 'react';
import {
    ChartBar,
    ChartLine,
    ChartArea,
    ChartScatter
} from '@patternfly/react-charts';
import {
    ChartApiData,
    ChartDataSerie,
    ChartSchema,
    ChartSimple,
    ChartType
} from '../types';
import legendMapper from '../Tooltips';
import {
    getLabels,
    snakeToSentence
} from '../Common/helpers';

const components: Partial<Record<ChartType, React.ElementType>> = {
    [ChartType.bar]: ChartBar,
    [ChartType.line]: ChartLine,
    [ChartType.area]: ChartArea,
    [ChartType.scatter]: ChartScatter
};

/**
 * Calculate data points. The interactive label can hide chart components,
 * if it is hidden we want to display null element so the color is staying
 * the same for the other charts.
 */
const getData = (
    data: ChartDataSerie,
    y = 'y',
    labelName: string
): Record<string, string | number>[] =>
    data.hidden
        ? [{ [y]: null }]
        : data.serie.map(el => ({
            ...el,
            y: el[y],
            ...labelName && { labelName }
        }));

const createChart = (
    id: number,
    data: ChartSchema,
    chartData: ChartApiData
): React.ReactElement => {
    const { charts, functions } = data;
    const chart = charts.find(({ id: i }) => i === id) as ChartSimple;
    const SelectedChart = components[chart.type];

    let props = {...chart.props};
    if (chart.tooltip?.type) {
        const LegendComponent = legendMapper[chart.tooltip.type];
        props = {
            ...props,
            labels: getLabels(chart.tooltip.customFnc),
            labelComponent: <LegendComponent
                {...chart.tooltip.props}
                dy={0}
            />
        }
    }

    if (chart.onClick) {
        props = {
            ...props,
            events: [{
                target: 'data',
                eventHandlers: {
                    onClick: functions.onClick[chart.onClick]
                }
            }]
        }
    }

    return (
        <SelectedChart
            {...props}
            key={chartData.data[0].name}
            data={getData(
                chartData.data[0],
                props.y as string,
                chart.tooltip?.labelName ?? snakeToSentence(props.y as string)
            )}
            name={chartData.data[0].name}
        />
    );
};

export default createChart;
