import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import MuiThemeProvider from './containers/theme/theme-provider.container';
import { appRouter } from './router';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <RouterProvider router={appRouter} />
        <CssBaseline />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
