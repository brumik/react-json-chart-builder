import React, { FunctionComponent, useEffect, useState } from 'react';
import {
    ChartPie as PFChartPie
} from '@patternfly/react-charts';
import {
    ChartApiData,
    ChartPie,
    ChartSchema
} from '../types';
import ResponsiveContainer from '../Common/ResponsiveContainer';
import {
    getInteractiveLegendForSingleSeries as getInteractiveLegend,
    getLegendProps
} from '../Common/getLegendProps';
import { paddingNumberToObject } from '../Common/helpers';

interface Props {
    id: number,
    data: ChartSchema
}

const CreatePieChart: FunctionComponent<Props> = ({
    id,
    data
}) => {
    const { charts } = data;
    const wrapper = charts.find(({ id: i }) => i === id) as ChartPie;
    const [width, setWidth] = useState(0);
    const [resolvedApi, setResolvedApi] = useState({
        data: []
    } as ChartApiData);
    const [serie, setSerie] = useState([
        { hidden: true }
    ] as Record<string, string | number | boolean>[])

    useEffect(() => {
        if (resolvedApi.data.length > 0) {
            setSerie(
                resolvedApi.data[0].serie.map(el => ({
                    ...el,
                    hidden: false
                }))
            );
        }
    }, [ resolvedApi ])

    const props = {
        height: 300,
        y: 'y',
        ...wrapper?.props,
        ...wrapper?.props?.padding
            ? { padding: paddingNumberToObject(wrapper.props.padding) }
            : {
                padding: {
                    bottom: 70,
                    left: 70,
                    right: 50,
                    top: 50
                }
            }
    }

    let legendProps = getLegendProps(wrapper, resolvedApi, props.padding)
    if (wrapper.legend?.interactive) {
        legendProps = {
            ...legendProps,
            legendComponent: getInteractiveLegend(wrapper, serie, setSerie, resolvedApi)
        };
        delete legendProps.legendData;
    }

    return (
        <ResponsiveContainer
            setWidth={setWidth}
            height={props.height}
            api={wrapper.api}
            setData={setResolvedApi}
            fetchFnc={data.functions.fetchFnc}
        >
            {resolvedApi.data.length > 0 && <PFChartPie
                {...props}
                {...legendProps}
                data={serie.map(el =>
                    el.hidden
                        ? ({...el, [props.y as string]: 0})
                        : ({...el})
                )}
                key={resolvedApi.data[0].name}
                name={resolvedApi.data[0].name}
                width={width}
                constrainToVisibleArea={true}
            />}
        </ResponsiveContainer>
    );
};

export default CreatePieChart;
