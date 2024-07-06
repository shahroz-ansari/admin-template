import { combineSlices } from '@reduxjs/toolkit';
import { apiSlice } from './slices/api.slice';

export const rootReducer = combineSlices(apiSlice);
