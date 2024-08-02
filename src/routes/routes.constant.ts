/** Auth paths prefix */
export const auth = '/auth';

/** Admin paths prefix */
export const admin = '/admin';

/** Auth routes */
export const loginPath = `${auth}/login`;

/** Dashboard */
export const dashboardPath = `${admin}/dashboard`;

/** Products */
export const productsPath = `${admin}/products`;
export const productsAddPath = `${productsPath}/add`;
export const productsEditPath = `${productsPath}/:productId/edit`;
