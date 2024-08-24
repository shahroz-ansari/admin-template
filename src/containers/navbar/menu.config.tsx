import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Permissions } from '../../constants/permissions.constant';
import type { SidebarMenu } from '../../models/app.model';
import { dashboardPath, productsPath } from '../../routes/routes.constant';

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
