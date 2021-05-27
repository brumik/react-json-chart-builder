import * as React from 'react';
import ChartRenderer, { functions } from '../../src/';
import { dashboard as schema } from './schema';

const App: React.FunctionComponent<Record<string, never>> = () => {
    return (
        <div style={{ maxWidth: '1100px', margin: 'auto' }}>
            <ChartRenderer
                schema={schema}
                functions={functions}
            />
        </div>
    );
};

export default App;
