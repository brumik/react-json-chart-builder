import * as React from 'react';
import ChartRenderer, { functions } from '../../src/';
import { dashboard as schema } from './schema';
import data from '../api/';

/* eslint-disable-next-line */
const getResponse = (url: string) => data[url];

const App: React.FunctionComponent<Record<string, never>> = () => {
    return (
        <div style={{ maxWidth: '1100px', margin: 'auto' }}>
            <ChartRenderer
                schema={schema}
                functions={{
                    ...functions,
                    fetchFnc: (api) => Promise.resolve(getResponse(api.url))
                }}
            />
        </div>
    );
};

export default App;
