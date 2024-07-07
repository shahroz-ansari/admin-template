import { ThemeProvider } from '@mui/material';
import { useAppSelector } from '../../store/store.hook';
import defaultTheme from '../../themes/default.theme';

interface Props {
  children: React.ReactNode;
}

export const themeMapping = {
  default: defaultTheme,
};

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector((state) => state.app.theme);
  const themeOptions = useAppSelector((state) => state.app.themeOptions);

  return (
    <ThemeProvider theme={themeMapping[theme](themeOptions)}>{children}</ThemeProvider>
  );
};

export default MuiThemeProvider;
