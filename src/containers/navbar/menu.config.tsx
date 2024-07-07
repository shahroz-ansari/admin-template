import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Permissions } from '../../constants/permissions.constant';
import { SidebarMenu } from '../../models/app.model';

export const sidebarMenu: SidebarMenu[] = [
  {
    container: 'Quick links',
    items: [
      {
        title: 'Dashboard',
        icon: MenuIcon,
        path: '/dashboard',
        permissions: [],
      },
    ],
  },
  {
    container: 'Catalog',
    items: [
      {
        title: 'Products',
        icon: InboxIcon,
        path: '/products',
        permissions: [Permissions.Product.list],
      },
    ],
  },
];
