import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Button,
  ButtonVariant,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSection,
  PageSidebar
} from '@patternfly/react-core';
import { List, Show } from './Pages';
import Navigation from './Navigation';
import logo from '../public/favicon.png';

const jumpToDocs = () => {
  const url = window.location.origin + window.location.pathname + 'docs/';
  window.open(url, '_blank');
};

const App: FC<Record<string, never>> = () => {
  const headerToolbar = (
    <PageHeaderTools>
      <Button onClick={() => jumpToDocs()} variant={ButtonVariant.primary}>
            Jump to docs
      </Button>
    </PageHeaderTools>
  );

  const Header = (
    <PageHeader
      logo={(
        <>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <img src={logo} width="30px" alt="Logo" />
          <p style={{ marginLeft: '10px', color: 'white' }}>Chart builder demo</p>
        </>
      )}
      headerTools={headerToolbar}
      showNavToggle
    />
  );
  const Sidebar = <PageSidebar nav={<Navigation />} />;

  return (
    <Page header={Header} isManagedSidebar sidebar={Sidebar} style={{ minHeight: '100vh' }}>
      <PageSection isFilled>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/example/:slug" element={<Show />} />
        </Routes>
      </PageSection>
    </Page>
  );
};

export default App;
