import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { setupAxiosInterceptors } from './configs/http-client.config';
import RouterContainer from './containers/router/router.container';
import MuiThemeProvider from './containers/theme/theme-provider.container';
import ToastContainer from './containers/toasts/toasts.container';
import ErrorBoundary from './error-boundry';
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
