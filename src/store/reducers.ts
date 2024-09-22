import { combineSlices } from '@reduxjs/toolkit';
import { apiSlice } from '../containers/api/api.slice';
import { appSlice } from '../containers/app/app.slice';
import { productSlice } from '../containers/products/products.slice';
import { sessionSlice } from '../containers/session/session.slice';
import { toastSlice } from '../containers/toasts/toast.slice';
import { userSlice } from '../containers/user/user.slice';

export const rootReducer = combineSlices(
  userSlice,
  appSlice,
  sessionSlice,
  toastSlice,
  apiSlice,
  productSlice,
);
