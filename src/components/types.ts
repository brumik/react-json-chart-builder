import {
  ChartBarProps,
  ChartProps as PFChartProps,
  ChartTooltipProps as PFChartTooltipProps,
  ChartStackProps,
  ChartGroupProps,
  ChartPieProps as PFChartPieProps,
  ChartLegendOrientation,
  ChartPieLegendPosition as ChartLegendPosition,
  ChartLineProps,
  ChartAreaProps,
  ChartScatterProps,
  ChartThemeColor,
  ChartAxisProps as PFChartAxisProps,
  ChartLabelProps,
  ChartLegendTooltipProps
} from '@patternfly/react-charts';
import { ChartFunctions } from './Functions/types';
export * from './Functions/types';

/**
 * Currently only for internal usage.
 * The padding props requires all fields to be defined, so the library does not
 * have to worry about the missing fields.
 */
export interface PaddingProps { top: number, bottom: number, left: number, right: number }

/**
 * The user facing padding props defines padding on four sides of the element.
 * The missing fields are filled in the appcilation early on.
 */
export interface PaddingPropsOptional { top?: number, bottom?: number, left?: number, right?: number }

/**
 * This enum defines the possible chart kinds, which are used to compose the hierarchy of
 * the chart elements.
 */
export enum ChartKind {
  simple = 'simple',
  group = 'group',
  stack = 'stack',
  wrapper = 'wrapper'
}

/**
 * This enum specifies all the valid chart types.
 * These chart types have to be used with the `simple` chart kind.
 */
export enum ChartType {
  bar = 'bar',
  line = 'line',
  area = 'area',
  scatter = 'scatter'
}

/**
 * This enum should contain all the possible template types for the tooltip.
 * This is still not implemented fully in the library as only one template exists.
 */
export enum ChartTooltipType {
  default = 'default'
}

/**
 * This enum contains all the possible top level chart types.
 * These chart types have to be used with the `wrapper` chart kind.
 */
export enum ChartTopLevelType {
  chart = 'chart',
  pie = 'pie'
}

/**
 * The ChartDataSerie is used to define one data serie for a chart.
 * This serie then can be displayed as one of the ChartTypes.
 *
 * @see ChartType
 */
export interface ChartDataSerie {
  /**
   * The data for the serie. This is an array of objects, where each object
   * represents one data point.
   */
  serie: Record<string, string | number>[],

  /**
   * The hidden prop defines if the serie is currently visible in the chart.
   * This is used to hide the serie in group and stacked charts.
   * This prop is one of the props that the library changes when the legend is
   * clicked (it is only possible when the legend is interactive).
   *
   * @see ChartLegendProps
   */
  hidden: boolean,

  /**
   * Unique name for the series. This name is used internally do differenciate
   * and reference the series.
   */
  name: string
}

// Reexport the interfaces from Patternfly charts.
export { ChartLegendPosition, ChartLegendOrientation };

/**
 * The ChartLegendEntry defines a single entry in the legend.
 */
export interface ChartLegendEntry {
  /**
   * The name prop defines the displayed name for the entry.
   */
  name: string,

  /**
   * The childName prop defines the name of the connected serie.
   * This is used in the interactive legend to reference the correct
   * series when the legend is clicked.
   *
   * @see ChartLegendProps
   * @see ChartDataSerie
   */
  childName?: string,

  /**
   * The tooltipText prop defines the tooltip when hoverin over the legend
   * entry. If not defined the default tootilp is the name.
   *
   * It is advised to add the name to the tooltip when not wrapping the legend.
   * Otherwise the name could be too long to display and the users will
   * have no way to read it in the whole length.
   */
  tooltipText?: string,

  /**
   * The rest prop is used to pass any other props to the legend entry.
   * This prop will not overwrite the custom functionality added by the library.
   */
  [key: string]: string | number
}

/**
 * The ChartData is used to define the complete data for a chart.
 */
export interface ChartData {
  /**
   * The series prop should contain all the series used in the chart.
   *
   * @see ChartDataSerie
   */
  series: ChartDataSerie[],

  /**
   * The legend prop should contain all the legend entries for the chart.
   * The order of the array does matter, as it will be displated in that same order.
   */
  legend?: ChartLegendEntry[]
}

interface ChartBase {
  /**
   * The id props specifies the *unique* id for the given element in the schema.
   * Used in the library to reference the element in the schema.
   */
  id: number,

  /**
   * The kind prop specifies what part of the chart is the element.
   */
  kind: ChartKind,

  /**
   * The parent prop specifies which element is the parent for the
   * current element. In case of `null` the element is top level element.
   */
  parent: number
}

export interface ChartTooltipProps {
  /**
   * The type prop defines which component to use. Right now there is only one.
   *
   * @default 'default'
   */
  type?: ChartTooltipType,

  /**
   * The props prop is used as the props to the tooltip component.
   * These props are passed dowm to the tooltip component.
   */
  props?: PFChartTooltipProps,

  /**
   * The standalone prop defines if the tooltip content will be returned for
   * the simple, standalone tooltip, or if it will be formatted for the grouped
   * tooltip for an axis.
   *
   * @default false
   */
  standalone?: boolean,

  /**
   * The labelName prop defines the string which will be used to label the value
   * in the tooltip. If not passed the default behaviour is to try to use the
   * key from the data set.
   *
   * @example `not defined label name` - if the data is `{ foo_bar: 15 }` then the label will be `'Foo bar'`.
   * @example `labelName: 'My value'` - if the data is `{ foo_bar: 15 }` then the label will be `'My value'`.
   */
  labelName?: string,

  /**
   * The labelFormat prop defines which label format function will be used.
   * The value has to be in the name one of the passed functions in the
   * `functions` list under the `labelFormat` key.
   *
   * The labelFormat prop in only used here when the tooltip is standalone.
   * In the other cases the top level tooltip function is used from ChartWrapperTooltipProps.
   *
   * @default 'default'
   * @see ChartWrapperTooltipProps
   * @see ChartLabelFormatFunction
   * @see ChartInterface.functions
   */
  labelFormat?: string
}

/** The ChartSimpleProps unifying all the possible types fot the simple chart props. */
export type ChartSimpleProps = ChartBarProps | ChartLineProps | ChartAreaProps | ChartScatterProps;

export interface ChartSimple extends ChartBase {
  /** The kind of the chart. Always `simple`. */
  kind: ChartKind.simple,

  /**
   * The props defined the props that are directly passed to the chart element.
   * The are not owerwriting the extra props that are added by the library.
   */
  props: ChartSimpleProps,

  /**
   * The name prop defines the name by which the chart will be referenced.
   * Usually you want to leave this prop empty, since by default the library
   * fills the name from the data set.
   */
  name?: string,

  /** The type prop defines which chart type will be rendered. */
  type: ChartType,

  /**
   * The tooltip prop if defined creates a tooltip for the chart. All the porps
   * inside the tooltip prop are used to controll the tooltip.
   *
   * @example `tooltip: {}` - the chart and the data will show up in tootlip(s).
   * @example `tooltip: { standalone: true }` - the chart will have a standalone tooltip.
   */
  tooltip?: ChartTooltipProps,

  /**
   * The onClick prop defines which on click function will be used when the data point is clicked.
   * The value has to be in the name one of the passed functions in the
   * `functions` list under the `onClick` key. The default function does nothing.
   *
   * @default 'default'
   * @see ChartWrapperTooltipProps
   * @see ChartOnClickFunction
   * @see ChartInterface.functions
   */
  onClick?: string
}

export interface ChartGroup extends ChartBase {
  /** The kind of the chart. Always `group`. */
  kind: ChartKind.group,

  /**
   * The props defined the props that are directly passed to the chart element.
   * The are not owerwriting the extra props that are added by the library.
   */
  props?: ChartGroupProps,

  /**
   * The template prop references the ID of an element (BaseChart) that will be used as
   * the template for the chart. This can be used for generating variable amouth
   * of charts (like grouped bar charts) from the passed data set.
   *
   * @see BaseChart
   * @see ChartData
   */
  template?: number
}

export interface ChartStack extends ChartBase {
  /** The kind of the chart. Always `stack`. */
  kind: ChartKind.stack,

  /**
   * The props defined the props that are directly passed to the chart element.
   * The are not owerwriting the extra props that are added by the library.
   */
  props?: ChartStackProps
}

export interface ChartAxisProps extends Omit<PFChartAxisProps, 'tickFormat'> {
  /**
   * The tickFormat prop defines which function will be used for labelling the axis.
   * The value has to be in the name one of the passed functions in the
   * `functions` list under the `tickFormat` key. The default function displays the
   * data as it is.
   *
   * @default 'default'
   * @see ChartTickFormatFunction
   * @see ChartInterface.functions
   */
  tickFormat?: string,

  /** The labelProps is passed to the label component as it is. */
  labelProps?: ChartLabelProps,

  /**
   * The turncateAt prop defines at what length should be the ticks label turncated.
   * Please not that the charts are not using monospace characters, however it is not
   * possible to inject css onto svg pictures.
   *
   * @example `turncateAt: 2` - when the label would be `My label` it will be turncated to `My...`.
   */
  turncateAt?: number,

  /**
   * When the wrapText is set to true and the turncateAt is set instead of truncating
   * at the position it will insert newlines, wrapping the text. This method also has problems
   * with the non monospace characters used in the charts.
   *
   * @see turncateAt
   * @example `turncateAt: 2; wrapText: true` - when the label would be `My label` it will bemodified to `My\n label`.
   *
   */
  wrapText?: boolean
}

export interface ChartLegendProps {
  /**
   * The interactive prop defines if the legend is clicable or not.
   * When enabled the user can click on the legend entry and toggle the data serie between
   * hidden and visible.
   *
   * @default false
   */
  interactive?: boolean,

  /** The position prop controlls the position of the legend. */
  position: ChartLegendPosition,

  /** The orientation prop defines if the legend is vertical or horizontal. */
  orientation: ChartLegendOrientation,

  /**
   * The turncateAt prop defines at what length should be the ticks label turncated.
   * Please not that the charts are not using monospace characters, however it is not
   * possible to inject css onto svg pictures.
   *
   * @example `turncateAt: 2` - when the label would be `My label` it will be turncated to `My...`.
   */
  turncateAt?: number,

  /**
   * When the wrapText is set to true and the turncateAt is set instead of truncating
   * at the position it will insert newlines, wrapping the text. This method also has problems
   * with the non monospace characters used in the charts.
   *
   * @see turncateAt
   * @example `turncateAt: 2; wrapText: true` - when the label would be `My label` it will bemodified to `My\n label`.
   *
   */
  wrapText?: boolean,

  /**
   * The hasTooltip defines if the chart legend entries show tooltip when howered.
   * The tooltip currently only display the tooltipText from the legend entry.
   *
   * @default false
   * @see ChartLegendEntry.tooltipText
   */
  hasTooltip?: boolean
}

export interface ChartTopLevelElement extends ChartBase {
  /** The kind for a top level element is always `wrapper`. */
  kind: ChartKind.wrapper,

  /** The parent for a top level element is always `null`: no parent. */
  parent: null,

  /**
   * The type prop specifies which kind of wrapper/top level element
   * is the element.
   */
  type: ChartTopLevelType
}

export interface ChartProps extends Omit<PFChartProps, 'padding'> {
  /**
   * For more clear interface, the option to define only one number for all the sides
   * is removed. This makes sure that the user knows that each of the sides will have
   * most probably different padding (depending on the axes, labels and legends).
   */
  padding?: PaddingPropsOptional
}

export interface ChartPieProps extends Omit<PFChartPieProps, 'padding'> {
  /**
   * For more clear interface, the option to define only one number for all the sides
   * is removed. This makes sure that the user knows that each of the sides will have
   * most probably different padding (depending on the axes, labels and legends).
   */
  padding?: PaddingPropsOptional
}

export interface ChartWrapperTooltipProps {
  /**
   * The mouseFollow prop defines if the tooltip should follow the mouse.
   * If disabled the tooltip is dispayed relative to the data point, when
   * enabled it is displaed relative to the mouse.
   */
  mouseFollow?: boolean,

  /**
   * The stickToAxis prop is ues to stick the tooltip to the axis.
   * When set to 'x' for example the mouse will move a vertical line trough
   * the cart and all the data points on that axis will display in the tooltip.
   */
  stickToAxis?: 'x' | 'y',

  /* eslint-disable max-len */
  /**
   * The cursor prop when enabled adds cursor container to the vornoi container.
   * You probably want to enable this with most of the tooltips.
   *
   * See in: [Patternfly Charts](https://github.com/patternfly/patternfly-react/blob/a8c59ffa9bb424d46036dabe35c777b999fb11d6/packages/react-charts/src/components/ChartUtils/chart-container.tsx#L28)
   *
   * @default false
   */
  /* eslint-enable max-len */
  cursor?: boolean,

  /**
   * The labelFormat prop defines which label format function will be used.
   * The value has to be in the name one of the passed functions in the
   * `functions` list under the `labelFormat` key.
   *
   * @default 'default'
   * @see ChartLabelFormatFunction
   * @see ChartInterface.functions
   */
  labelFormat?: string,

  /**
   * The legendTooltip prop enables legend like tooltips.
   * When not defiend the tooltips are the basic default ones.
   * The user can define custom values for the tooltip in the object.
   * If no values are given all the values are used from the legend of the
   * chart.
   *
   * In the future this should be moved into a modularized ChartTooltipType.
   *
   * @see https://github.com/brumik/react-json-chart-builder/issues/76
   * @example  `legendTooltip: { titlePropertyForLegend: 'year' }`
   *  Use the values from the chart's legend with the title being the year from the data series.
   * @example  `legendTooltip: {}` - Use the values from the chart's legend
   */
  legendTooltip?: {
    /**
     * The legendData prop can specify which data to use for the tooltip.
     * If none given the data from the chart's legend is used.
     */
    legendData?: ChartLegendTooltipProps['legendData'],

    /**
     * The titlePropertyForLegend defines which field from the data will be used as
     * the title for the toolptip popup.
     */
    titleProperyForLegend?: string
  }
}

export interface ChartWrapper extends ChartTopLevelElement {
  /**
   * The type of the chart.
   * Great for checking the type in the library and type hinting.
   */
  type: ChartTopLevelType.chart,

  /**
   * The props for the chart wrapper. These props can override the default props from PF charts as
   * well as overwriting most of the previous props defined in this library for greater customizability.
   * Overwriting props like `legend*`, `labels` can result in unexpected behavior.
   */
  props?: ChartProps,

  /**
   * The xAxis prop specifies how the chart's x axis should be rendered.
   */
  xAxis: ChartAxisProps,

  /**
   * The yAxis prop specifies how the chart's y axis should be rendered.
   */
  yAxis: ChartAxisProps,

  /**
   * The legend prop specifies the Legend component for the chart.
   */
  legend?: ChartLegendProps,

  /**
   * The tooltip prop specifies how the chart's tooltip should be rendered.
   */
  tooltip?: ChartWrapperTooltipProps
}

export interface ChartPie extends ChartTopLevelElement {
  /**
   * The type of the chart.
   * Great for checking the type in the library and type hinting.
   */
  type: ChartTopLevelType.pie,

  /**
   * The props for the pie chart. These props can override the default props from PF charts as
   * well as overwriting most of the previous props defined in this library for greater customizability.
   * Overwriting props like `legend*`, `labels` can result in unexpected behavior.
   */
  props?: ChartPieProps,

  /**
   * The legend prop specifies the Legend component for the pie chart.
   */
  legend?: ChartLegendProps,

  /**
   * The tooltip prop specifies how the pie chart's tooltip should be rendered.
   */
  tooltip?: PFChartTooltipProps
}

/** All the valid elements that can be top level elements in a chart. */
export type ChartTopSchemaElement = ChartWrapper | ChartPie;

/** All the valid interfaces that can be part of the schema. */
export type ChartSchemaElement = ChartSimple | ChartTopSchemaElement | ChartGroup | ChartStack;

export interface ChartInterface {
  /**
   * Defines the complete schema for the chart.
   */
  schema: ChartSchemaElement[],

  /**
   * Defines all the functions, that the library will use.
   */
  functions: ChartFunctions,

  /**
   * A basic react useState() hook return, containing the data.
   *
   * Defines a state, containing the data. This allows in certain situations the library to update the data.
   * The function can be passed as `() => {}` in cases where the charting library does not needs
   * to update the data.
   */
  dataState: [ChartData, (data: ChartData) => void]
}

// Reexport theme color from PF
export { ChartThemeColor }
