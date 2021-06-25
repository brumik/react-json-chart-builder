import React from 'react';
import { ChartGroup as PFChartGroup } from '@patternfly/react-charts';
import {
    ChartApiData,
    ChartData,
    ChartGroup,
    ChartKind,
    ChartSchema,
    ChartSchemaElement,
    ChartSimple,
    ChartType
} from '../types';
import createChart from './createChart';
import createStack from './createStack';
import { getBarWidthFromData } from '../Common/helpers';

const components: Partial<Record<ChartKind, (
    id: number,
    data: ChartSchema,
    resolvedApi: ChartApiData
) => React.ReactElement[]>> = {
    [ChartKind.simple]: createChart,
    [ChartKind.stack]: createStack
};

const createDynamicChildren = (
    template: ChartSimple,
    parent: number,
    data: ChartData
): ChartSchemaElement[] => ([
    ...data.map((_d, idx) => ({
        ...template,
        id: idx,
        parent,
        props: {
            ...template.props,
            ...template.type === ChartType.bar && { barWidth: getBarWidthFromData(data) }
        }
    }))
]);

const createGroup = (
    id: number,
    data: ChartSchema,
    resolvedApi: ChartApiData
): React.ReactElement[] => {
    let { charts } =  data;
    const group = charts.find(({ id: i }) => i === id) as ChartGroup;
    let children = charts.filter(({ parent }) => parent === id);

    let renderedChildren: React.ReactElement[] | React.ReactElement[][] = [];
    let extraProps = {};

    if (group.template) {
        charts = createDynamicChildren(
            group.template,
            group.id,
            resolvedApi.data
        );
        children = charts.filter(({ parent }) => parent === id);
        renderedChildren = children.map((child, idx) => {
            const calculatedApi = {
                // Pass only the data which needs the child
                data: [resolvedApi.data[idx]]
            }
            return components[child.kind](child.id, { ...data, charts }, calculatedApi);
        });

        if (group.template.type === ChartType.bar) {
            extraProps = {
                ...extraProps,
                offset: getBarWidthFromData(resolvedApi.data),
                barWidth: getBarWidthFromData(resolvedApi.data)
            }
            // If returning bar array it produces a barWidth calculation error in the VictoryCharts.
            renderedChildren = renderedChildren.map(el => el[0]);
        }
    } else {
        renderedChildren = children.map(child => components[child.kind](child.id, data, resolvedApi));
    }

    return ([
        <PFChartGroup
            key={id}
            {...extraProps}
            {...group?.props}
        >
            { renderedChildren }
        </PFChartGroup>
    ]);
};

export default createGroup;
