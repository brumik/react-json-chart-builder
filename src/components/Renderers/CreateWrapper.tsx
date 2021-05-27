import React, { FunctionComponent, useState } from 'react';
import {
    Chart as PFChart,
    ChartAxis,
    ChartVoronoiContainer,
    createContainer,
    ChartDomain
} from '@patternfly/react-charts';
import {
    ChartApiData,
    ChartData,
    ChartKind,
    ChartSchema,
    ChartSchemaElement,
    ChartType,
    ChartWrapper
} from '../types';
import createChart from './createChart';
import createGroup from './createGroup';
import createStack from './createStack';
import {
    getBarWidthFromData,
    getLabels
} from '../Common/helpers';
import ResponsiveContainer from '../Common/ResponsiveContainer';
import {
    getInteractiveLegendForMultiSeries as getInteractiveLegend, getLegendProps
} from '../Common/getLegendProps';

const components: Partial<Record<ChartKind, (
    id: number,
    data: ChartSchema,
    resolvedApi: ChartApiData
) => React.ReactElement>> = {
    [ChartKind.group]: createGroup,
    [ChartKind.stack]: createStack,
    [ChartKind.simple]: createChart
};

interface Props {
    id: number,
    data: ChartSchema
}

const getDomainPadding = (
    data: ChartData,
    child: ChartSchemaElement
): number => {
    switch (child.kind) {
        case ChartKind.simple:
            return child.type === ChartType.bar ? 20 : 0;
        case ChartKind.group:
            return child.template && child.template.type === ChartType.bar
                ? getBarWidthFromData(data) * data.length / 2
                : 0
        default:
            return 0;
    }
}

const CreateWrapper: FunctionComponent<Props> = ({
    id,
    data
}) => {
    const { charts, functions } = data;
    const wrapper = charts.find(({ id: i }) => i === id) as ChartWrapper;
    const children = charts.filter(({ parent }) => parent === wrapper.id);
    const [width, setWidth] = useState(0);
    const [resolvedApi, setResolvedApi] = useState({
        data: []
    } as ChartApiData);

    const xAxis = {
        fixLabelOverlap: true,
        ...wrapper.xAxis,
        ...wrapper.xAxis.tickFormat && { tickFormat: functions.axisFormat[wrapper.xAxis.tickFormat] }
    };

    const yAxis = {
        domain: { x: [0, 1], y: [0, 1] } as ChartDomain,
        ...wrapper.yAxis,
        tickFormat: functions.axisFormat[wrapper.yAxis.tickFormat]
    };

    const props = {
        height: 200,
        ...wrapper.props
    }

    let legendProps = getLegendProps(wrapper, resolvedApi)
    if (wrapper.legend?.interactive) {
        legendProps = {
            ...legendProps,
            legendComponent: getInteractiveLegend(wrapper, resolvedApi, setResolvedApi)
        }
        delete legendProps.legendData;
    }

    let labelProps = {};
    if (wrapper.tooltip) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const ContainerComponent = wrapper.tooltip.cursor
            ? createContainer('voronoi', 'cursor')
            : ChartVoronoiContainer;

        labelProps = {
            containerComponent: <ContainerComponent
                cursorDimension='x'
                constrainToVisibleArea
                labels={getLabels(wrapper.tooltip.customFnc)}
                mouseFollowTooltips
                voronoiDimension="x"
            />
        }
    }

    return (
        <ResponsiveContainer
            setWidth={setWidth}
            height={props.height}
            api={wrapper.api}
            setData={setResolvedApi}
            fetchFnc={functions.fetchFnc}
        >
            {resolvedApi.data.length > 0 && <PFChart
                {...legendProps}
                // Get the domain padding if it has a grouped bar chart from template or a bar chart
                domainPadding={children.length === 1 ? getDomainPadding(resolvedApi.data, children[0]) : 0}
                {...props}
                key={id}
                width={width}
                {...labelProps}
            >
                <ChartAxis {...xAxis} />
                <ChartAxis dependentAxis {...yAxis} />
                {children && children.map(child => components[child.kind](child.id, data, resolvedApi))}
            </PFChart>}
        </ResponsiveContainer>
    );
};

export default CreateWrapper;
