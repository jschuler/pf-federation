import React from 'react';
import Page from './Page';
import { StackItem } from '@patternfly/react-core';
import './App.css';
const RemoteButton1 = React.lazy(() => import('remote_01/Button'));
const RemoteButton2 = React.lazy(() => import('remote_02/Button'));

const App = () => (
  <Page>
    <React.Suspense fallback="Loading Button">
      <StackItem><RemoteButton1 /></StackItem>
      <StackItem><RemoteButton2 /></StackItem>
    </React.Suspense>
  </Page>
);

export default App;
