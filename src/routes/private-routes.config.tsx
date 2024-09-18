import { lazy } from 'react';
import { Permissions } from '../constants/permissions.constant';
import {
  dashboardPath,
  productsAddPath,
  productsEditPath,
  productsPath,
} from './routes.constant';

const privateRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
  permission: string[];
}[] = [
  {
    path: dashboardPath,
    Component: lazy(() => import('../pages/dashboard.page')),
    permission: [Permissions.None],
  },
  {
    path: productsPath,
    Component: lazy(() => import('../pages/products-list.page')),
    permission: [Permissions.Product.list],
  },
  {
    path: productsAddPath,
    Component: lazy(() => import('../pages/product-add.page')),
    permission: [Permissions.Product.list],
  },
  {
    path: productsEditPath,
    Component: lazy(() => import('../pages/product-edit.page')),
    permission: [Permissions.Product.list],
  },
];

export default privateRoutes;
