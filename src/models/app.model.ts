import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export enum ThemeTypes {
  default = 'default',
}

export interface CustomThemeOptions {
  color?: {
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
  };
  background?: {
    header?: string;
    page?: string;
  };
}

export interface MenuItem {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  path: string;
  permissions: string[];
}
export interface SidebarMenu {
  container: string | null;
  items: MenuItem[];
}

export interface TokenDataType {
  scopes: string[];
}
