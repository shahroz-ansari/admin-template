import { Box, Stack } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/store.hook';
import { dashboardPath } from '../router/routes.constant';

const AuthLayoutContainer: React.FC = () => {
  const token = useAppSelector((state) => state.session.token);

  if (token) return <Navigate to={dashboardPath} replace />;

  return (
    <Box sx={{ p: 4 }}>
      <Stack sx={{ border: 1, p: 4 }}>
        <Outlet />
      </Stack>
    </Box>
  );
};

export default AuthLayoutContainer;
