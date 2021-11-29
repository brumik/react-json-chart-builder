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
  ChartLabelProps as PFChartLabelProps,
  ChartLabelProps
} from '@patternfly/react-charts';
import { ChartAxisFormatFunction, ChartFunctions, ChartOnClickFunction } from './Functions/types';
export * from './Functions/types';

export interface PaddingProps { top: number, bottom: number, left: number, right: number }
export interface PaddingPropsOptional { top?: number, bottom?: number, left?: number, right?: number }

export enum ChartKind {
  simple = 'simple',
  group = 'group',
  stack = 'stack',
  wrapper = 'wrapper'
}

export enum ChartType {
  bar = 'bar',
  line = 'line',
  area = 'area',
  scatter = 'scatter'
}

export enum ChartTooltipType {
  default = 'default'
}

export interface ChartDataSerie {
  serie: Record<string, string | number>[],
  hidden: boolean,
  name: string
}

export interface ChartData {
  series: ChartDataSerie[],
  legend?: ChartLegendEntry[]
}

interface ChartBase {
  id: number,
  kind: ChartKind,
  parent: number
}

export interface ChartTooltipProps {
  type?: ChartTooltipType,
  props?: PFChartTooltipProps,
  standalone?: boolean,
  labelName?: string,
  labelFormat?: string,
}

export interface LegendTooltipProps extends PFChartLabelProps {
  datum?: Record<string, unknown>
}

export type ChartSimpleProps = ChartBarProps | ChartLineProps | ChartAreaProps | ChartScatterProps;

export interface ChartSimple extends ChartBase {
  kind: ChartKind.simple,
  props: ChartSimpleProps,
  name?: string,
  type: ChartType,
  tooltip?: ChartTooltipProps
  onClick?: string
}

export interface ChartGroup extends ChartBase {
  kind: ChartKind.group,
  props?: ChartGroupProps,
  template?: number,
}

export interface ChartStack extends ChartBase {
  kind: ChartKind.stack,
  props?: ChartStackProps,
}

export interface ChartAxisProps extends Omit<PFChartAxisProps, 'tickFormat'> {
  tickFormat?: string,
  label?: string,
  labelProps?: ChartLabelProps,
  turncateAt?: number,
  wrapText?: boolean,
}

export { ChartLegendPosition, ChartLegendOrientation };
export interface ChartLegendEntry {
  name: string,
  childName?: string,
  tooltipText?: string,
  [key: string]: string | number
}
export type ChartLegendData = ChartLegendEntry[];

export interface ChartLegendProps {
  interactive?: boolean,
  position: ChartLegendPosition,
  orientation: ChartLegendOrientation,
  turncateAt?: number,
  wrapText?: boolean,
  hasTooltip?: boolean,
}

export enum ChartTopLevelType {
  chart = 'chart',
  pie = 'pie'
}

export interface ChartTopLevelElement extends ChartBase {
  kind: ChartKind.wrapper,
  parent: null,
  type: ChartTopLevelType,
}

export interface ChartProps extends Omit<PFChartProps, 'padding'> {
  padding?: PaddingPropsOptional
}

export interface ChartWrapper extends ChartTopLevelElement {
  type: ChartTopLevelType.chart,
  props?: ChartProps,
  xAxis: ChartAxisProps,
  yAxis: ChartAxisProps,
  legend?: ChartLegendProps,
  tooltip?: {
    mouseFollow?: boolean,
    stickToAxis?: 'x' | 'y',
    cursor?: boolean,
    labelFormat?: string,
    legendTooltip?: {
      legendData?: {
        childName: string,
        name: string,
        symbol?: {
          fill?: string
        }
      }[],
      titleProperyForLegend?: string
    },
  }
}

export interface ChartPieLegendProps {
  interactive?: boolean,
  position: ChartLegendPosition,
  orientation: ChartLegendOrientation,
  turncateAt?: number,
  wrapText?: boolean,
  hasTooltip?: boolean
}

export interface ChartPieProps extends Omit<PFChartPieProps, 'padding'> {
  padding?: PaddingPropsOptional
}

export interface ChartPie extends ChartTopLevelElement {
  type: ChartTopLevelType.pie,
  props?: ChartPieProps,
  legend?: ChartPieLegendProps,
  tooltip?: PFChartTooltipProps
}

// Reexport chart functions
export {
  ChartOnClickFunction,
  ChartAxisFormatFunction,
  ChartFunctions
}

// Reexport theme color from PF
export { ChartThemeColor };

export type ChartTopSchemaElement = ChartWrapper | ChartPie;
export type ChartSchemaElement = ChartSimple | ChartTopSchemaElement | ChartGroup | ChartStack;
export interface ChartInterface {
  schema: ChartSchemaElement[],
  functions: ChartFunctions
  dataState: [ChartData, (data: ChartData) => void];
}
