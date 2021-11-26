import React from 'react';
import { ChartGroup as PFChartGroup } from '@patternfly/react-charts';
import {
    ChartData,
    ChartDataSerie,
    ChartGroup,
    ChartKind,
    ChartInterface,
    ChartSchemaElement,
    ChartSimple,
    ChartType
} from '../types';
import createChart from './createChart';
import createStack from './createStack';
import { getBarWidthFromData } from '../Common/helpers';

const components: Partial<Record<ChartKind, (
    id: number,
    data: ChartInterface,
    resolvedApi: ChartData
) => React.ReactElement>> = {
    [ChartKind.simple]: createChart,
    [ChartKind.stack]: createStack
};

const createDynamicChildren = ({
    template, parent, data, width
}: {
    template: ChartSimple,
    parent: number,
    data: ChartDataSerie[],
    width: number
}): ChartSchemaElement[] => ([
    ...data.map((_d, idx) => ({
        ...template,
        id: idx,
        parent,
        props: {
            ...template.type === ChartType.bar && { barWidth: getBarWidthFromData(data, width) },
            ...template.props
        }
    }))
]);

const getTemplateChart = ({
    templateId,
    charts
}: {
    templateId: number,
    charts: ChartSchemaElement[]
}) => charts.find(({ id }) => id === templateId) as ChartSimple;

const createGroup = (
    id: number,
    data: ChartInterface,
    resolvedApi: ChartData,
    width: number
): React.ReactElement => {
    const { schema: charts } =  data;
    const group = charts.find(({ id: i }) => i === id) as ChartGroup;
    let children = charts.filter(({ parent }) => parent === id);

    let renderedChildren: React.ReactElement[] = [];
    const templateChart = getTemplateChart({ templateId: group.template, charts });
    if (templateChart) {
        children = createDynamicChildren({
            template: templateChart,
            parent: group.id,
            data: resolvedApi.series,
            width
        });
        renderedChildren = children.map((child, idx) =>
            components[child.kind](
                child.id,
                { ...data, schema: [child] },
                { series: [resolvedApi.series[idx]] }
            ));
    } else {
        renderedChildren = children.map(child => components[child.kind](child.id, data, resolvedApi));
    }

    return (
        <PFChartGroup
            key={id}
            {...templateChart
                && templateChart.type === ChartType.bar
                && { offset: getBarWidthFromData(resolvedApi.series, width) }
            }
            {...group?.props}
        >
            { renderedChildren }
        </PFChartGroup>
    );
};

export default createGroup;
