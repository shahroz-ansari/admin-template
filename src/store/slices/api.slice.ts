import {
  APISliceState,
  ErrorAPIPayloadActionType,
  FullfilledAPIPayloadActionType,
  PendingAPIPayloadActionType,
} from '../../models/api.model';
import { createAppSlice } from '../create-slice';

const initialState: APISliceState = {
  'api.login': {
    data: {
      id: 1,
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      image: '',
      token: '',
    },
  },
};

export const apiSlice = createAppSlice({
  name: 'api',
  initialState: initialState,
  reducers: (create) => ({
    apiFullfilled: create.reducer(
      (state, action: FullfilledAPIPayloadActionType<keyof APISliceState>) => {
        const { key, value } = action.payload;
        if (!state[key]) state[key] = {};

        state[key]!.data = value;
      },
    ),
    apiPending: create.reducer(
      (state, action: PendingAPIPayloadActionType<keyof APISliceState>) => {
        const { key, value } = action.payload;
        if (!state[key]) state[key] = {};

        state[key]!.loading = value;
      },
    ),
    apiRejected: create.reducer(
      (state, action: ErrorAPIPayloadActionType<keyof APISliceState>) => {
        const { key, value } = action.payload;
        if (!state[key]) state[key] = {};

        state[key]!.error = value;
      },
    ),
  }),
});

// Action creators are generated for each case reducer function.
export const { apiFullfilled, apiPending, apiRejected } = apiSlice.actions;
