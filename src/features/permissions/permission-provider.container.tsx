import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import { decodeJWT } from '../../utils/jwt.util';
import {
  sessionMerchant,
  sessionPermissions,
  sessionStore,
} from '../session/session.slice';
import { createPermissionsFromScopes } from './permission.util';
import { Permissions } from './permissions.constant';

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
    if (token) {
      const { feScopes, orgId, storeIds } = decodeJWT(token!);
      const permissions = createPermissionsFromScopes(feScopes, {
        merchantId: merchantId || Permissions.All,
        storeId: storeId || Permissions.All,
      });
      orgId && dispatch(sessionMerchant(orgId));
      storeIds && dispatch(sessionStore(storeIds?.[0] || ''));
      dispatch(sessionPermissions(permissions));
    }
  }, [dispatch, merchantId, storeId, token]);

  return !token || permissions ? children : null;
};

export default PermissionProvider;
