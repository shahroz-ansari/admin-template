import { RouterProvider } from 'react-router-dom';
import CircularLoader from '../../components/loader/circular-loader.component';
import { appRouter } from '../../router';
import PermissionProvider from '../permissions/permission-provider.container';

const RouterContainer: React.FC = () => {
  return (
    <PermissionProvider>
      <RouterProvider router={appRouter} fallbackElement={<CircularLoader />} />
    </PermissionProvider>
  );
};

export default RouterContainer;
