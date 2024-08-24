import type { PayloadAction } from '@reduxjs/toolkit';
import { AppAuthTokenKey } from '../../constants/storage-keys.constant';
import { localDataService } from '../../services/local-data/local-data.service';
import { decodeJWT } from '../../utils/jwt.util';
import { loginAPI } from '../apis/login.api';
import { createAppSlice } from '../create-slice';

interface SessionSlice {
  token?: string;
  permissions?: string[];
  activeMerchantId?: string;
  activeStoreId?: string;
}

const token = localDataService.getAuthToken();
const tokenData = token ? decodeJWT(token) : null;

const initialState: SessionSlice = {
  token,
  activeMerchantId: tokenData?.orgId || '',
  activeStoreId: tokenData?.storeIds?.[0] || '',
};

export const sessionSlice = createAppSlice({
  name: 'session',
  initialState,
  reducers: (create) => ({
    sessionToken: create.reducer((state, action: PayloadAction<string | undefined>) => {
      action.payload && localDataService.setAuthToken(action.payload);
      state.token = action.payload;
    }),
    sessionPermissions: create.reducer(
      (state, action: PayloadAction<string[] | undefined>) => {
        state.permissions = action.payload;
      },
    ),
    sessionMerchant: create.reducer((state, action: PayloadAction<string>) => {
      state.activeMerchantId = action.payload;
    }),
    sessionStore: create.reducer((state, action: PayloadAction<string>) => {
      state.activeStoreId = action.payload;
    }),
    sessionLogout: create.reducer((state) => {
      localDataService.clearStorage([AppAuthTokenKey]);

      state.token = '';
      state.permissions = [];
      state.activeMerchantId = '';
      state.activeStoreId = '';
    }),
  }),
  extraReducers(builder) {
    builder.addCase(loginAPI.fulfilled, (_state, action) => {
      const { orgId, storeIds } = decodeJWT(action.payload?.token!);
      sessionSlice.caseReducers.sessionToken(_state, {
        ...action,
        payload: action.payload?.token,
      });
      orgId &&
        sessionSlice.caseReducers.sessionMerchant(_state, {
          ...action,
          payload: orgId,
        });
      storeIds &&
        sessionSlice.caseReducers.sessionStore(_state, {
          ...action,
          payload: storeIds?.[0] || '',
        });
    });
  },
});

export const {
  sessionToken,
  sessionPermissions,
  sessionMerchant,
  sessionStore,
  sessionLogout,
} = sessionSlice.actions;
