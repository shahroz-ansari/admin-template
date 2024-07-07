import { PayloadAction } from '@reduxjs/toolkit';
import { localDataService } from '../../services/local-data/local-data.service';
import { loginAPI } from '../apis/login.api';
import { createAppSlice } from '../create-slice';

interface SessionSlice {
  token?: string;
  permissions?: unknown;
}

const initialState: SessionSlice = {
  token: localDataService.getAuthToken(),
};

export const appSlice = createAppSlice({
  name: 'session',
  initialState,
  reducers: (create) => ({
    tokenUpdate: create.reducer((state, action: PayloadAction<string>) => {
      localDataService.setAuthToken(action.payload);
      state.token = action.payload;
    }),
  }),
  extraReducers(builder) {
    builder.addCase(loginAPI.fulfilled, (_state, action) => {
      // TODO:: Check if this is working or not
      appSlice.actions.tokenUpdate(action.payload?.token || '');
    });
  },
});

export const {} = appSlice.actions;
