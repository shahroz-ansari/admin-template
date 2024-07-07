import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { LoginPayloadType } from '../../models/auth.model';
import { loginService } from '../../services/http/login.service';

export const loginAPI = createAsyncThunk(
  'api.login',
  async (data: LoginPayloadType, thunkAPI) => {
    try {
      const response = await loginService({ data, headers: { token: '' } });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue((e as AxiosError).response);
      else alert('errror...');
    }
  },
);
