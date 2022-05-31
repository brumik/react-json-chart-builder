import React, { FunctionComponent } from 'react';
import {
  ChartKind,
  ChartInterface,
  ChartTopLevelType,
  ChartTopSchemaElement
} from './types';
import CreateWrapper from './Renderers/CreateWrapper';
import CreatePieChart from './Renderers/CreatePieChart';

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
  const chart = props.schema.find(
    ({ kind, parent }) => kind === ChartKind.wrapper && parent === null
  ) as ChartTopSchemaElement;

  if (chart.type === ChartTopLevelType.chart) {
    return (<CreateWrapper key={chart.id + Math.random()} id={chart.id} {...props} />);
  } else if (chart.type === ChartTopLevelType.pie) {
    return (<CreatePieChart key={chart.id + Math.random()} id={chart.id} {...props} />);
  } else {
    return null;
  }
}

export default ChartRenderer;
