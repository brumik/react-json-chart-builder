import React from 'react';
import { ChartStack as PFChartStack } from '@patternfly/react-charts';
import { ChartData, ChartKind, ChartInterface, ChartSimple, ChartStack } from '../types';
import createChart from './createChart';

const components: Partial<Record<ChartKind, (
    id: number,
    data: ChartInterface,
    resolvedApi: ChartData
) => React.ReactElement>> = {
    [ChartKind.simple]: createChart
};

const createStack = (
    id: number,
    data: ChartInterface,
    resolvedApi: ChartData
): React.ReactElement => {
    const { schema: charts } = data;
    const stack = charts.find(({ id: i }) => i === id) as ChartStack;
    const children = charts.filter(({ parent }) => parent === id) as ChartSimple[];

    return (
        <PFChartStack
            key={stack.id}
            {...stack?.props}
        >
            { children.map(child => components[child.kind](child.id, data, resolvedApi)) }
        </PFChartStack>
    )
};

export default createStack;
