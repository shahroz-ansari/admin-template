import { useAppSelector } from '../../store/store.hook';
import { hasPermission } from './permission.util';

const usePermission = (permissionRequired: string[]) => {
  const userPermissions = useAppSelector((state) => state.session.permissions);

  return hasPermission(permissionRequired, userPermissions!);
};

export default usePermission;
