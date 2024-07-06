import { PayloadAction } from '@reduxjs/toolkit';
import { LoginResponseType, loginAPIStoreKey } from '../services/login.service';

export interface APISliceState {
  [loginAPIStoreKey]?: APIDataType<LoginResponseType>;
}

type APISliceStateDataTypes = {
  [K in keyof APISliceState]-?: APISliceState[K] extends { data: infer D } ? D : never;
};

type APIDataType<T> = {
  data?: T;
  loading?: boolean;
  error?: ErrorPayload;
};

type ErrorPayload = {
  status: number;
  message: string;
};

export type FullfilledAPIPayloadActionType<K extends keyof APISliceState> =
  PayloadAction<{ key: K; value: APISliceStateDataTypes[K] }>;

export type PendingAPIPayloadActionType<K extends keyof APISliceState> = PayloadAction<{
  key: K;
  value: boolean;
}>;

export type ErrorAPIPayloadActionType<K extends keyof APISliceState> = PayloadAction<{
  key: K;
  value: ErrorPayload;
}>;
