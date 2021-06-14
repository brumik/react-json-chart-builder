import React, { FunctionComponent } from 'react';
import {
    ChartFunctions,
    ChartKind,
    ChartSchema,
    ChartTopLevelType,
    ChartTopSchemaElement,
    ChartSchemaElement
} from './types';
import CreateWrapper from './Renderers/CreateWrapper';
import CreatePieChart from './Renderers/CreatePieChart';

interface Props {
    schema: ChartSchemaElement[],
    functions: ChartFunctions
}

const ChartRenderer: FunctionComponent<Props> = ({
    schema,
    functions
}) => {
    const data: ChartSchema = {
        charts: schema,
        functions
    };

    const chart = data.charts.find(
        ({ kind, parent }) => kind === ChartKind.wrapper && parent === null
    ) as ChartTopSchemaElement;

    if (chart.type === ChartTopLevelType.chart) {
        return (<CreateWrapper key={chart.id + Math.random()} id={chart.id} data={data} />);
    } else if (chart.type === ChartTopLevelType.pie) {
        return (<CreatePieChart key={chart.id + Math.random()} id={chart.id} data={data} />);
    } else {
        return null;
    }
}

export default ChartRenderer;
