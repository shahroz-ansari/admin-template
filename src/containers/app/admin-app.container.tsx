import { Navigate, Outlet } from 'react-router-dom';
import { loginPath } from '../../routes/routes.constant';
import { useAppSelector } from '../../store/store.hook';
import AppLayoutContainer from '../layout/app-layout.container';

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
