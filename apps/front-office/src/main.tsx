import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import { frontStore } from '@multi-epargne/front-office/data-access/core';

import App from './app/app';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={frontStore}>
      <App />
    </Provider>
  </StrictMode>
);
