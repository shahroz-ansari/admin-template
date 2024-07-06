import { ThemeProvider } from '@mui/material';
import theme from './theme';

interface Props {
  children: React.ReactNode;
}
const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
