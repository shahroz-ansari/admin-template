import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { LoginAPIResponseType } from '../../../services/http/login.service';
import { loginService } from '../../../services/http/login.service';
import { sessionToken } from '../../session/session.slice';
import { toastError } from '../../toasts/toast.slice';
import { userSetInfo } from '../../user/user.slice';
import type { LoginPayloadType } from '../auth.model';

export const loginAPIKey = 'api.login';

export const loginAPI = createAsyncThunk<LoginAPIResponseType, LoginPayloadType>(
  loginAPIKey,
  async (data, thunkAPI) => {
    try {
      const response = await loginService({ data });
      thunkAPI.dispatch(userSetInfo(response.data));
      thunkAPI.dispatch(sessionToken(response.data.token));
      return response.data;
    } catch (e) {
      thunkAPI.dispatch(toastError({ message: `Oops: ${loginAPIKey}` }));

      return thunkAPI.rejectWithValue((e as AxiosError).response);
    }
  },
);
