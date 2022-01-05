import React, { FC, useState } from 'react';
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

const jumpToDocs = () => {
  const url = window.location.origin + window.location.pathname + 'docs/';
  window.open(url, '_blank');
};

const App: FC<Record<string, never>> = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const headerToolbar = (
    <PageHeaderTools>
      <Button onClick={() => jumpToDocs()} variant={ButtonVariant.primary}>
            Jump to docs
      </Button>
    </PageHeaderTools>
  );

  const Header = (
    <PageHeader
      logo="Interactive chart builder app"
      headerTools={headerToolbar}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={() => setIsNavOpen(curr => !curr)}
    />
  );
  const Sidebar = <PageSidebar nav={<Navigation />} isNavOpen={isNavOpen} />;

  return (
    <Page header={Header} sidebar={Sidebar} style={{ minHeight: '100vh' }}>
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
