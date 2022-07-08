import React, { FunctionComponent } from 'react';
import {
  ChartKind,
  ChartInterface,
  ChartTopLevelType,
  ChartTopSchemaElement
} from './types';
import CreateWrapper from './Renderers/CreateWrapper';
import CreatePieChart from './Renderers/CreatePieChart';
import { replaceStringsWithFunctions } from './Common/stylePreprocess';

/**
 * The ChartRenderer component is the default export of the library.
 *
 * The component is taking all the data, like schema and functions and renders
 * the chart(s) with the data, using the Patternfly React Charts.
 *
 * @param props See the ChartInterface type for more information
 * @returns The rendered chart component
 */
const ChartRenderer: FunctionComponent<ChartInterface> = (props) => {
  // Preprocess the schema for the styles:
  const schema = replaceStringsWithFunctions(props.schema, props.functions?.style ?? {});

  const newProps = {
    ...props,
    schema
  }

  const chart = schema.find(
    ({ kind, parent }) => kind === ChartKind.wrapper && parent === null
  ) as ChartTopSchemaElement;

  if (chart.type === ChartTopLevelType.chart) {
    return (<CreateWrapper key={chart.id + Math.random()} id={chart.id} {...newProps} />);
  } else if (chart.type === ChartTopLevelType.pie) {
    return (<CreatePieChart key={chart.id + Math.random()} id={chart.id} {...newProps} />);
  } else {
    return null;
  }
}

export default ChartRenderer;
