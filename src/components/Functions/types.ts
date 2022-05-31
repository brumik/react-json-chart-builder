import { SyntheticEvent } from 'react';

export { ChartLabelFormatFunctionNames } from './labelFormat';
export { ChartAxisFormatFunctionNames } from './axisFormat';

/**
 * The ChartOnClick function takes the events and the props
 * passed to the function and can return anything. It can be used
 * to redirect with the data point for example.
 *
 * @param event The event that was triggered, see SyntheticEvent.
 * @param props The props passed to the function from the data point. See VictoryCharts docs.
 */
export type ChartOnClickFunction = (
  event: SyntheticEvent<any, Event>,
  props: Record<string, any>
) => any;

/**
 * The ChartOnHover function takes the tick data and should return the
 * desired axis label to display. It can be used to format date or numbers.
 */
export type ChartAxisFormatFunction = (tick: string | number) => string;

/**
 * The ChartLabelFormatFunction takes the tick data where the datum contains the
 * data point values. It should return the desired label to display in the chart.
 *
 * @param data The data point values. See VictoryCharts docs.
 */
export type ChartLabelFormatFunction = (data: { datum: Record<string, any> }) => string;

/**
 * The ChartFunctions object should hold all the function that are used in the chart and are
 * customizable. Each key is a category and each value is an object with the 'name' as the key
 * and value as the function. The 'name' is then used to reference the function in the code.
 */
export interface ChartFunctions {
  /** The onClick contains the name: function pairs for the onClick even in the chart.  */
  onClick?: Record<string, ChartOnClickFunction>

  /** The axisFormat contains the name: function pairs for formatting the axis tick lables.  */
  axisFormat?: Record<string, ChartAxisFormatFunction>

  /** The axisFormat contains the name: function pairs for formatting the tooltip and other labels.  */
  labelFormat?: Record<string, ChartLabelFormatFunction>
}
