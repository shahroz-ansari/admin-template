import type { PayloadAction } from '@reduxjs/toolkit';
import { loginAPI } from '../apis/login.api';
import { createAppSlice } from '../create-slice';

interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
}

interface UserInitialState {
  info: UserInfo;
}

const initialState: UserInitialState = {
  info: {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
  },
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState,
  reducers: (create) => ({
    userSetInfo: create.reducer((state, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    }),
  }),
  extraReducers(builder) {
    builder.addCase(loginAPI.fulfilled, (_state, action) => {
      if (action.payload) {
        const { id, firstName, lastName, gender } = action.payload;
        userSlice.actions.userSetInfo({ id, firstName, lastName, gender });
      }
    });
  },
});
