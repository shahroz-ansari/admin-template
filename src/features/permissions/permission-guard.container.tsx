import { Navigate } from 'react-router-dom';
import usePermission from './permission.hook';

interface Props {
  permission: string[];
  mode?: 'redirect' | 'hide';
  children: React.ReactNode;
}
const PermissionGuard: React.FC<Props> = ({ permission, children, mode = 'hide' }) => {
  const permitted = usePermission(permission);

  if (permitted) return children;

  if (mode === 'redirect') return <Navigate to="/dashboard" />;

  return <>Not permitted</>;
};

export default PermissionGuard;
