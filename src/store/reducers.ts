import { combineSlices } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api.slice';
import { appSlice } from './slices/app.slice';
import { sessionSlice } from './slices/session.slice';
import { toastSlice } from './slices/toast.slice';
import { userSlice } from './slices/user.slice';

export const rootReducer = combineSlices(
  userSlice,
  appSlice,
  sessionSlice,
  toastSlice,
  apiSlice,
);
