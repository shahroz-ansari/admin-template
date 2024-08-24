import { blue, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import type { CustomThemeOptions } from '../models/app.model';

const defaultTheme = (theme?: CustomThemeOptions) =>
  createTheme({
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: theme?.background?.header || blue[700],
          },
        },
      },
    },
    palette: {
      background: {
        default: theme?.background?.page || grey[100],
      },
      primary: {
        main: theme?.color?.primary?.main || blue[700],
      },
      secondary: {
        main: theme?.color?.secondary?.main || green[500],
      },
    },
  });

export default defaultTheme;
