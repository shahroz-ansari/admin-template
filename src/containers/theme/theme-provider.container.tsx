import { ThemeProvider } from '@mui/material';
import { useAppSelector } from '../../store/store.hook';
import { muiThemes } from '../../themes';

interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector((state) => state.app.theme);
  const themeOptions = useAppSelector((state) => state.app.themeOptions);

  return <ThemeProvider theme={muiThemes[theme](themeOptions)}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
