import React, { FunctionComponent, useEffect, useState } from 'react';
import {
    ChartPie as PFChartPie
} from '@patternfly/react-charts';
import {
    ChartPie,
    ChartInterface
} from '../types';
import ResponsiveContainer from '../Common/ResponsiveContainer';
import {
    getInteractiveLegendForSingleSeries as getInteractiveLegend,
    getLegendProps
} from '../Common/getLegendProps';
import { paddingNumberToObject } from '../Common/helpers';

interface Props extends ChartInterface {
    id: number,
}

const CreatePieChart: FunctionComponent<Props> = ({
    id,
    schema,
    dataState
}) => {
    const wrapper = schema.find(({ id: i }) => i === id) as ChartPie;
    const [data] = dataState;
    const [width, setWidth] = useState(0);
    const [serie, setSerie] = useState([
        { hidden: true }
    ] as Record<string, string | number | boolean>[])

    useEffect(() => {
        if (data.series.length > 0) {
            setSerie(
                data.series[0].serie.map(el => ({
                    ...el,
                    hidden: false
                }))
            );
        }
    }, [data]);

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

    let legendProps = getLegendProps(wrapper, data, props.padding)
    if (wrapper.legend?.interactive) {
        legendProps = {
            ...legendProps,
            legendComponent: getInteractiveLegend(wrapper, serie, setSerie, data)
        };
        delete legendProps.legendData;
    }

    return (
        <ResponsiveContainer
            setWidth={setWidth}
            height={props.height}
        >
            {data.series.length > 0 && <PFChartPie
                {...props}
                {...legendProps}
                data={serie.map(el =>
                    el.hidden
                        ? ({...el, [props.y as string]: 0})
                        : ({...el})
                )}
                key={data.series[0].name}
                name={data.series[0].name}
                width={width}
                constrainToVisibleArea={true}
            />}
        </ResponsiveContainer>
    );
};

export default CreatePieChart;
