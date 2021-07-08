import React, {
    FunctionComponent,
    useEffect,
    useRef,
    useState
} from 'react';
import {
    getApiData
} from '../Api';
import { ChartFetchFunction } from '../Functions/types';
import {
    ChartApiProps,
    ChartApiData
} from '../types';
import ErrorState from './ErrorState';

interface Props {
    setWidth: (width: number) => void
    height: number,
    api: ChartApiProps,
    setData: (data: ChartApiData) => void,
    fetchFnc: ChartFetchFunction
}

const ResponsiveContainer: FunctionComponent<Props> = ({
    setWidth,
    height,
    api,
    setData,
    children,
    fetchFnc
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleResize = () => {
        if (containerRef.current && containerRef.current.clientWidth) {
            setWidth(containerRef.current.clientWidth);
        } else {
            setWidth(500); // Container width to default to 500 (calculate for the padding)
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        let didCancel = false;

        setLoading(true);
        getApiData(api, fetchFnc)
            .then(results => {
                if (!didCancel) {
                    setError(false);
                    setData(results);
                }
            })
            .catch(() => {
                if (!didCancel) {
                    setError(true);
                }
            })
            .finally(() => {
                if (!didCancel) {
                    setLoading(false);
                }
            });

        return () => {
            didCancel = true;
        };
    }, [api])

    return (
        <div ref={containerRef}>
            <div style={{ height }}>
                { !loading && !error && children }
                { !loading && error && <ErrorState />}
            </div>
        </div>
    );
}

export default ResponsiveContainer;