import { combineSlices } from '@reduxjs/toolkit';
import { appSlice } from './slices/app.slice';
import { loginSlice } from './slices/login.slice';

export const rootReducer = combineSlices(loginSlice, appSlice);
