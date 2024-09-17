import { blue, green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import type { CustomThemeOptions } from '../models/app.model';

const defaultTheme = (theme?: CustomThemeOptions) =>
  createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: theme?.background?.header || blue[700],
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'custom-bg-primary' },
            style: {
              backgroundColor: `${theme?.background?.header || blue[700]}12`,
              color: theme?.background?.header || blue[700],
              '&:hover': {
                backgroundColor: `${theme?.background?.header || blue[700]}24`,
              },
            },
          },
        ],
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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'custom-bg-primary': true;
  }
}
