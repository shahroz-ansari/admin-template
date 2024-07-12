import { useEffect } from 'react';
import { Permissions } from '../../constants/permissions.constant';
import { permissionUpdate } from '../../store/slices/session.slice';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import { decodeJWT } from '../../utils/jwt.util';
import { createPermissionsFromScopes } from '../../utils/permission.util';

interface Props {
  children: React.ReactNode;
}

const PermissionProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.session.token);
  const merchantId = useAppSelector((state) => state.session.activeMerchantId);
  const storeId = useAppSelector((state) => state.session.activeStoreId);
  const permissions = useAppSelector((state) => state.session.permissions);

  useEffect(() => {
    const { scopes } = decodeJWT(token!);
    const permissions = createPermissionsFromScopes(scopes, {
      merchantId: merchantId || Permissions.All,
      storeId: storeId || Permissions.All,
    });
    dispatch(permissionUpdate(permissions));
  }, [token]);

  console.log('++', permissions);

  return permissions ? children : null;
};

export default PermissionProvider;
