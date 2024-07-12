const auth = '/auth';

/** Auth routes */
export const loginPath = `${auth}/login`;

/** Dashboard */
export const dashboardPath = '/dashboard';

/** Products */
export const productsPath = `${dashboardPath}/products`;
export const productsAddPath = `${productsPath}/add`;
export const productsEditPath = `${productsPath}/:productId/edit`;
