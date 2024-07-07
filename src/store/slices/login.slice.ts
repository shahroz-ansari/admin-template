import { LoginAPIResponseType } from '../../services/http/login.service';
import { loginAPI } from '../apis/login.api';
import { createAppSlice } from '../create-slice';

interface LoginInitialState {
  data: LoginAPIResponseType | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginInitialState = {
  data: null,
  loading: false,
  error: null,
};

export const loginSlice = createAppSlice({
  name: 'login',
  initialState,
  reducers: (create) => ({
    cleanLoginAPIData: create.reducer((state) => {
      (state.data = null), (state.loading = false), (state.error = null);
    }),
  }),
  extraReducers(builder) {
    builder
      .addCase(loginAPI.fulfilled, (state, action) => {
        state.data = action.payload || null;
      })
      .addCase(loginAPI.rejected, (state, action) => {
        state.error = 'Failed';
      })
      .addCase(loginAPI.pending, (state) => {
        console.log('pending....');
        state.loading = true;
      });
  },
});
