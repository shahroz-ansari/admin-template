/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { Permissions } from '../constants/permissions.constant';
import { dashboardPath, productsPath } from './routes.constant';

const DashboardPage = lazy(() => import('../pages/dashboard.page'));
const ProductPage = lazy(() => import('../pages/products-list.page'));

const privateRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
  permission: string[];
}[] = [
  {
    path: dashboardPath,
    Component: DashboardPage,
    permission: [Permissions.None],
  },
  {
    path: productsPath,
    Component: ProductPage,
    permission: [Permissions.Product.list],
  },
];

export default privateRoutes;
