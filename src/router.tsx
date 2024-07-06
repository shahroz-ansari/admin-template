import { Outlet, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/dashboard';

export const appRouter = createBrowserRouter([
  {
    path: 'auth',
    element: (
      <>
        Layout{' '}
        <>
          <Outlet />
        </>
      </>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);
