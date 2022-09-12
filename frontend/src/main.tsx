import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const prepareMock = async () => {
  if (process.env.NODE_ENV === 'development') {
    return import('./mocks/browser').then(({ worker }) => {
      worker.start();
    });
  }

  return Promise.resolve();
};

prepareMock().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
