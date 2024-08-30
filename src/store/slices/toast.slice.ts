import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../create-slice';

interface ToastData {
  message: string;
  variant?: 'success' | 'error';
}

interface ToastSlice {
  data: ToastData | null;
}

const initialState: ToastSlice = {
  data: null,
};

export const toastSlice = createAppSlice({
  name: 'toast',
  initialState,
  reducers: (create) => ({
    toastError: create.reducer((state, action: PayloadAction<ToastData>) => {
      state.data = { ...action.payload, variant: 'error' };
    }),
    toastSuccess: create.reducer((state, action: PayloadAction<ToastData>) => {
      state.data = { ...action.payload, variant: 'success' };
    }),
  }),
});

export const { toastError, toastSuccess } = toastSlice.actions;
