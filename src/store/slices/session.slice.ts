import { PayloadAction } from '@reduxjs/toolkit';
import { localDataService } from '../../services/local-data/local-data.service';
import { loginAPI } from '../apis/login.api';
import { createAppSlice } from '../create-slice';

interface SessionSlice {
  token?: string;
  permissions?: string[];
  activeMerchantId?: string;
  activeStoreId?: string;
}

const initialState: SessionSlice = {
  token: localDataService.getAuthToken(),
};

export const sessionSlice = createAppSlice({
  name: 'session',
  initialState,
  reducers: (create) => ({
    tokenUpdate: create.reducer((state, action: PayloadAction<string | undefined>) => {
      action.payload && localDataService.setAuthToken(action.payload);
      state.token = action.payload;
    }),
    permissionUpdate: create.reducer(
      (state, action: PayloadAction<string[] | undefined>) => {
        state.permissions = action.payload;
      },
    ),
    mechantActiveSet: create.reducer((state, action: PayloadAction<string>) => {
      state.activeMerchantId = action.payload;
    }),
    storeActiveSet: create.reducer((state, action: PayloadAction<string>) => {
      state.activeStoreId = action.payload;
    }),
  }),
  extraReducers(builder) {
    builder.addCase(loginAPI.fulfilled, (_state, action) => {
      // TODO:: Check if this is working or not
      sessionSlice.actions.tokenUpdate(action.payload?.token || '');
    });
  },
});

export const { tokenUpdate, permissionUpdate, mechantActiveSet, storeActiveSet } =
  sessionSlice.actions;
