import '@patternfly/react-core/dist/styles/base.css';
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

    const charts = (): ChartTopSchemaElement[] => {
        const top = data.charts.filter(({ kind }) => kind === ChartKind.wrapper) as ChartTopSchemaElement[];
        return top.filter(({ parent }) => parent === null).sort((a,b) => a.id - b.id);
    };

    return (
        <React.Fragment>
            {charts().map(el => {
                if(el.type === ChartTopLevelType.chart) {
                    return (<CreateWrapper key={el.id + Math.random()} id={el.id} data={data} />);
                } else if (el.type === ChartTopLevelType.pie) {
                    return (<CreatePieChart key={el.id + Math.random()} id={el.id} data={data} />);
                } else {
                    return null;
                }
            })}
        </React.Fragment>
    );
}

export default ChartRenderer;
