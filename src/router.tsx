import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CircularLoader from './components/loader/circular-loader.component';
import AdminAppContainer from './features/app/admin-app.container';
import AuthLayoutContainer from './features/auth/auth-layout.container';
import PermissionGuard from './features/permissions/permission-guard.container';
import privateRoutes from './features/router/private-routes.config';
import publicRoutes from './features/router/public-routes.config';
import { admin, auth } from './features/router/routes.constant';

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
