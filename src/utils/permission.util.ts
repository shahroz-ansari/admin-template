import { Permissions } from '../containers/permissions/permissions.constant';

export const hasPermission = function (
  permissionRequired: string[],
  userPermissions: string[],
) {
  if (permissionRequired.includes(Permissions.None)) return true;

  if (userPermissions.includes(Permissions.All)) return true;

  return permissionRequired.some((permission) => userPermissions.includes(permission));
};

export const createPermissionsFromScopes = function (
  scopes: string[],
  { merchantId, storeId }: { merchantId: string; storeId: string },
) {
  const userPermissions = scopes.reduce((permissions: string[], scope: string) => {
    const [_domain, path, permission] = scope.trim().split('::');
    const [_merchant, permittedMerchantId = '*', _store, permittedStoreId = '*'] = path
      .trim()
      .split('/');
    if (
      (permittedMerchantId === '*' || permittedMerchantId === merchantId) &&
      (permittedStoreId === '*' || permittedStoreId === storeId)
    ) {
      return permissions.concat(permission);
    }
    return permissions;
  }, []);

  return userPermissions;
};
