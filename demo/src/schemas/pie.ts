import {
    ChartKind,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartTopLevelType
} from '../../../src';

export default [
    {
        id: 1,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.pie,
        parent: null,
        props: {
            y: 'host_count'
        },
        api: {
            url: 'demoByOrgPie',
            method: 'GET'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right
        }
    }
];