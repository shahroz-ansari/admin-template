import { useCallback, useMemo } from 'react';
import type { RowAction } from '../../models/table.model';
import type { ProductsAPIRequestType } from '../../services/http/products.service';
import { productsAPI, productsAPIKey } from '../../store/apis/products.api';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import TableContainer from '../table/table.container';
import ProductListConfig from './product-list.config';

const ProductsListContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const productsLoading = useAppSelector((state) => state.api.pending[productsAPIKey]);

  const apiAction = useCallback(
    (data: Pick<ProductsAPIRequestType, 'params'>) => {
      dispatch(productsAPI({ ...data, params: { page: 1, limit: 10, ...data.params } }));
    },
    [dispatch],
  );

  const rowAction = useCallback<RowAction>((rowActionType, id) => {
    console.log(rowActionType, id);
  }, []);

  const preSelect = useMemo(() => [products?.data?.[0]?.id], [products]);

  return (
    <>
      <TableContainer
        loading={productsLoading}
        data={products}
        showSearch={false}
        preSelect={preSelect}
        apiAction={apiAction}
        rowAction={rowAction}
        config={ProductListConfig}
      />
    </>
  );
};

export default ProductsListContainer;
