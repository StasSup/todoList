import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootProvider from './providers/RootProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootProvider>
        <App />
      </RootProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
