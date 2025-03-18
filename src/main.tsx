import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { runMockServer } from './mocks/server';
import './index.scss';
import store from './store';
import { Header } from './shared/components/Header';

const queryClient = new QueryClient();

runMockServer().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Header />
          </Provider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>,
  );
});
