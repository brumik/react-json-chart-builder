import React, {
    FunctionComponent,
    useEffect,
    useRef
} from 'react';

interface Props {
    setWidth: (width: number) => void
    height: number,
    children?: React.ReactChildren | React.ReactChild,
}

const ResponsiveContainer: FunctionComponent<Props> = ({
    setWidth,
    height,
    children = []
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <div ref={containerRef}>
            <div style={{ height }}>
                {children}
            </div>
        </div>
    );
}

export default ResponsiveContainer;