import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

/** Public */
const AuthLayoutContainer = lazy(
  () => import('./containers/layout/auth-layout.container'),
);
const LoginPage = lazy(() => import('./pages/login.page'));

/** Protected */
const AppLayoutContainer = lazy(() => import('./containers/layout/app-layout.container'));
const Dashboard = lazy(() => import('./pages/dashboard.page'));

export const appRouter = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayoutContainer />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <AppLayoutContainer />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
]);
