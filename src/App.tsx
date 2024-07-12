import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import RouterContainer from './containers/router/router.container';
import MuiThemeProvider from './containers/theme/theme-provider.container';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <RouterContainer />
        <CssBaseline />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
