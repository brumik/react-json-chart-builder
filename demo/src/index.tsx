import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const RootApp: React.FC<Record<string, never>> = () => (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);
