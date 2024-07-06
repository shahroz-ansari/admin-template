import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { store } from './store/store';
import MuiThemeProvider from './theme/mui/theme-provider.component';

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
