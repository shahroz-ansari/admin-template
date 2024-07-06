import { AxiosError, AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { APISliceState } from '../models/api.model';
import { apiFullfilled, apiPending, apiRejected } from '../store/slices/api.slice';
import { useAppDispatch, useAppSelector } from '../store/store.hook';

type ServiceType<T, K> = (request: T) => Promise<AxiosResponse<K>>;

export function useAPI<T, K, P extends keyof APISliceState>(
  key: P,
  service: ServiceType<T, K>,
) {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.api[key]?.loading);
  const error = useAppSelector((state) => state.api[key]?.error);
  const data = useAppSelector((state) => state.api[key]?.data as K);

  const fetch = useCallback(
    async (data: T): Promise<AxiosResponse<K> | AxiosError<K>> => {
      try {
        dispatch(apiPending({ key, value: true }));

        const response = await service(data);
        const _data = response.data;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(apiFullfilled({ key, value: _data }));

        return response;
      } catch (error: unknown) {
        dispatch(
          apiRejected({
            key,
            value: { status: 400, message: 'Something went wrong' },
          }),
        );
        return error as AxiosError<K>;
      } finally {
        dispatch(apiPending({ key, value: false }));
      }
    },
    [dispatch, key, service],
  );

  return { loading, error, data, fetch };
}
