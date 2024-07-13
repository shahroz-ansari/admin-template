import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { refreshTokenService } from '../../services/http/refresh-token.service';

export const refreshTokenAPI = createAsyncThunk(
  'api.refresh-token',
  async (_, thunkAPI) => {
    try {
      const response = await refreshTokenService({ headers: { token: '' } });
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError)
        return thunkAPI.rejectWithValue((e as AxiosError).response);
      else alert('errror...');
    }
  },
);
