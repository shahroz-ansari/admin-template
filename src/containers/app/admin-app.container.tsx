import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/store.hook';
import { loginPath } from '../router/routes.constant';
import AppLayoutContainer from './app-layout.container';

const AdminAppContainer: React.FC = () => {
  const token = useAppSelector((state) => state.session.token);

  if (!token) return <Navigate to={loginPath} />;

  return (
    <AppLayoutContainer>
      <Outlet />
    </AppLayoutContainer>
  );
};

export default AdminAppContainer;
