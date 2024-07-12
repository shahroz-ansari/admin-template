import { lazy } from 'react';
import { loginPath } from './routes.constant';

const LoginPage = lazy(() => import('../pages/login.page'));

const publicRoutes: {
  path: string;
  Component: React.LazyExoticComponent<React.FC>;
}[] = [
  {
    path: loginPath,
    Component: LoginPage,
  },
];

export default publicRoutes;
