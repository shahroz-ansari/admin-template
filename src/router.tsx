import { createBrowserRouter } from 'react-router-dom';
import AppLayoutContainer from './containers/layout/app-layout.container';
import AuthLayoutContainer from './containers/layout/auth-layout.container';
import PermissionGuard from './containers/permissions/permission-guard.container';
import privateRoutes from './routes/private-routes.config';
import publicRoutes from './routes/public-routes.config';

export const publicRouter = createBrowserRouter([
  {
    path: '',
    element: <AuthLayoutContainer />,
    children: publicRoutes.map(({ path, Component }) => ({
      path,
      element: <Component />,
    })),
  },
]);

export const privateRouter = createBrowserRouter([
  {
    path: '',
    element: <AppLayoutContainer />,
    children: privateRoutes.map(({ path, Component, permission }) => ({
      path,
      element: (
        <PermissionGuard permission={permission}>
          <Component />
        </PermissionGuard>
      ),
    })),
  },
]);
