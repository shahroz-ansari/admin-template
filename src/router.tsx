import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CircularLoader from './components/loader/circular-loader.component';
import AdminAppContainer from './containers/app/admin-app.container';
import AuthLayoutContainer from './containers/layout/auth-layout.container';
import PermissionGuard from './containers/permissions/permission-guard.container';
import privateRoutes from './routes/private-routes.config';
import publicRoutes from './routes/public-routes.config';
import { admin, auth } from './routes/routes.constant';

export const appRouter = createBrowserRouter([
  {
    path: auth,
    element: <AuthLayoutContainer />,
    children: publicRoutes.map(({ path, Component }) => ({
      path,
      element: (
        <Suspense fallback={<CircularLoader />}>
          <Component />
        </Suspense>
      ),
    })),
  },
  {
    path: admin,
    element: <AdminAppContainer />,
    children: privateRoutes.map(({ path, Component, permission }) => ({
      path,
      element: (
        <PermissionGuard permission={permission}>
          <Suspense fallback={<CircularLoader />}>
            <Component />
          </Suspense>
        </PermissionGuard>
      ),
    })),
  },
  {
    path: '*',
    Component: () => <h1>Not found</h1>,
  },
]);
