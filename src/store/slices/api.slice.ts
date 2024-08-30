import { loginAPI, loginAPIKey } from '../apis/login.api';
import { productsAPI, productsAPIKey } from '../apis/products.api';
import { refreshTokenAPI, refreshTokenAPIKey } from '../apis/refresh-token.api';
import { createAppSlice } from '../create-slice';

interface APISlice {
  errors: {
    [key: string]: unknown | null;
  };
  pending: {
    [key: string]: boolean | undefined;
  };
}

const initialState: APISlice = {
  errors: {},
  pending: {},
};

export const apiSlice = createAppSlice({
  name: 'api',
  initialState,
  reducers: (_create) => ({}),
  extraReducers(builder) {
    try {
      const apis = {
        [productsAPIKey]: productsAPI,
        [loginAPIKey]: loginAPI,
        [refreshTokenAPIKey]: refreshTokenAPI,
      };
      type APIs = typeof apis;
      Object.keys(apis).forEach((key) => {
        builder
          .addCase(apis[key as keyof APIs].pending, (state) => {
            state.pending[key] = true;
            state.errors[key] = null;
          })
          .addCase(apis[key as keyof APIs].fulfilled, (state) => {
            state.pending[key] = false;
          })
          .addCase(apis[key as keyof APIs].rejected, (state, action) => {
            state.pending[key] = false;
            state.errors[key] = action.payload;
          });
      });
    } catch (e) {
      console.log(e);
    }
  },
});
