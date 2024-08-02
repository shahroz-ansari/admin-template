import { Navigate, Outlet } from 'react-router-dom';
import { dashboardPath } from '../../routes/routes.constant';
import { useAppSelector } from '../../store/store.hook';

const AuthLayoutContainer: React.FC = () => {
  const token = useAppSelector((state) => state.session.token);

  if (token) return <Navigate to={dashboardPath} />;

  return (
    <>
      Auth Layout <Outlet />
    </>
  );
};

export default AuthLayoutContainer;
