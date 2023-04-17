import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';
import { App } from 'components/App';
// import { theme } from './constants';
import { persistor } from 'redux/store';
import { handleErrors } from 'api/helpers';
import './index.css';
import { CustomThemeProvider } from 'components/CustomThemeProvider/CustomThemeProvider';

const baseURL = process.env.REACT_APP_BASE_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
  queryCache: new QueryCache({
    onError: axiosError =>
      handleErrors({ axiosError, store, queryClient, baseURL }),
  }),
  mutationCache: new MutationCache({
    onError: axiosError =>
      handleErrors({ axiosError, store, queryClient, baseURL }),
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <CustomThemeProvider>
            <BrowserRouter basename={baseURL}>
              <App />
              <Toaster position="bottom-right" />
            </BrowserRouter>
          </CustomThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
