import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../store/create-slice';

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
});

export const { userSetInfo } = userSlice.actions;
