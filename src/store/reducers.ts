import { combineSlices } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/api.slice';
import { appSlice } from '../features/app/app.slice';
import { productSlice } from '../features/products/products.slice';
import { sessionSlice } from '../features/session/session.slice';
import { toastSlice } from '../features/toasts/toast.slice';
import { userSlice } from '../features/user/user.slice';

export const rootReducer = combineSlices(
  userSlice,
  appSlice,
  sessionSlice,
  toastSlice,
  apiSlice,
  productSlice,
);
