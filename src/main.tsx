import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { runMockServer } from './mocks/server';

import './index.scss';

runMockServer().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
