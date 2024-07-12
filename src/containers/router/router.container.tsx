import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { privateRouter, publicRouter } from '../../router';
import { useAppSelector } from '../../store/store.hook';
import PermissionProvider from '../permissions/permission-provider.container';

interface Props {}
const RouterContainer: React.FC<Props> = () => {
  const token = useAppSelector((state) => state.session.token);

  return token ? (
    <PermissionProvider>
      <Suspense fallback={<>loading</>}>
        <RouterProvider router={privateRouter} />
      </Suspense>
    </PermissionProvider>
  ) : (
    <RouterProvider router={publicRouter} />
  );
};

export default RouterContainer;
