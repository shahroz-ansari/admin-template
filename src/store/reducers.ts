import { combineSlices } from '@reduxjs/toolkit';
import { appSlice } from './slices/app.slice';
import { loginSlice } from './slices/login.slice';
import { sessionSlice } from './slices/session.slice';

export const rootReducer = combineSlices(loginSlice, appSlice, sessionSlice);
