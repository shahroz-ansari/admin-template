import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Permissions } from '../../permissions/permissions.constant';
import { dashboardPath, productsPath } from '../../router/routes.constant';
import type { SidebarMenu } from '../app.model';

export const sidebarMenu: SidebarMenu[] = [
  {
    container: 'Quick links',
    items: [
      {
        title: 'Dashboard',
        icon: MenuIcon,
        path: dashboardPath,
        permissions: [Permissions.None],
      },
    ],
  },
  {
    container: 'Catalog',
    items: [
      {
        title: 'Products',
        icon: InboxIcon,
        path: productsPath,
        permissions: [Permissions.Product.list],
      },
    ],
  },
];
