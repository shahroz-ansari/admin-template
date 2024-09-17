import { lazy } from 'react';
import { loginPath } from './routes.constant';

const publicRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
}[] = [
  {
    path: loginPath,
    Component: lazy(() => import('../pages/login.page')),
  },
];

export default publicRoutes;
