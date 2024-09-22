import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { ProductsAPIResponseType } from '../../../services/http/products.service';
import {
  productsService,
  type ProductsAPIRequestType,
} from '../../../services/http/products.service';
import { toastError } from '../../toasts/toast.slice';
import { productsSet } from '../products.slice';

export const productsAPIKey = 'api.products';

export const productsAPI = createAsyncThunk<
  ProductsAPIResponseType,
  Pick<ProductsAPIRequestType, 'params'>
>(productsAPIKey, async (data, thunkAPI) => {
  try {
    const response = await productsService(data);
    thunkAPI.dispatch(productsSet(response.data));
    return response.data;
  } catch (e) {
    thunkAPI.dispatch(toastError({ message: `Oops: ${productsAPIKey}` }));

    return thunkAPI.rejectWithValue((e as AxiosError).response);
  }
});
