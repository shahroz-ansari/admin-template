import { RouterProvider } from 'react-router-dom';
import { appRouter } from '../../router';
import PermissionProvider from '../permissions/permission-provider.container';

const RouterContainer: React.FC = () => {
  return (
    <PermissionProvider>
      <RouterProvider router={appRouter} fallbackElement={<h1>Loading</h1>} />
    </PermissionProvider>
  );
};

export default RouterContainer;
