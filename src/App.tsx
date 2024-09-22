import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { setupAxiosInterceptors } from './configs/http-client.config';
import ErrorBoundary from './error-boundry';
import RouterContainer from './features/router/router.container';
import MuiThemeProvider from './features/theme/theme-provider.container';
import ToastContainer from './features/toasts/toasts.container';
import { store } from './store/store';

setupAxiosInterceptors(store);
const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MuiThemeProvider>
          <RouterContainer />
          <ToastContainer />
          <CssBaseline />
        </MuiThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
