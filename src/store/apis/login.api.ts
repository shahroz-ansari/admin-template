import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { GenericErrorMessage } from '../../constants/api-messages.constant';
import { LoginPayloadType } from '../../models/auth.model';
import { loginService } from '../../services/http/login.service';

export const loginAPIKey = 'api.login';

export const loginAPI = createAsyncThunk(
  loginAPIKey,
  async (data: LoginPayloadType, thunkAPI) => {
    try {
      const response = await loginService({ data });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue((e as AxiosError).response);
      else {
        return thunkAPI.rejectWithValue({
          message: GenericErrorMessage,
          status: 500,
        });
      }
    }
  },
);
