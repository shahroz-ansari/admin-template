import type { PayloadAction } from '@reduxjs/toolkit';
import { GenericErrorMessage } from '../../constants/api-messages.constant';
import { loginAPI } from '../apis/login.api';
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
  extraReducers(builder) {
    [loginAPI].forEach((api) =>
      builder.addCase(api.rejected, (state) => {
        // TODO:: handle action.payload message to handle error message
        state.data = { message: GenericErrorMessage, variant: 'error' };
      }),
    );
  },
});

export const { toastError, toastSuccess } = toastSlice.actions;
