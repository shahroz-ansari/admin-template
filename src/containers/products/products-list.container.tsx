import { useCallback, useMemo } from 'react';
import type { ProductsAPIRequestType } from '../../services/http/products.service';
import { productsAPI, productsAPIKey } from '../../store/apis/products.api';
import { useAppDispatch, useAppSelector } from '../../store/store.hook';
import TableContainer from '../table/table.container';

const ProductsListContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const productsLoading = useAppSelector((state) => state.api.pending[productsAPIKey]);
  const action = useCallback(
    (data: Pick<ProductsAPIRequestType, 'params'>) => {
      dispatch(productsAPI({ ...data, params: { page: 1, limit: 10, ...data.params } }));
    },
    [dispatch],
  );

  const config = useMemo(
    () => ({
      name: {
        name: 'name',
        title: 'Name',
        sortable: true,
        filter: {
          options: [
            { label: 'Samsung', value: 's1' },
            { label: 'Airtel', value: 'a1' },
          ],
        },
      },
      image: {
        name: 'image',
        title: 'Image',
        sortable: true,
      },
    }),
    [],
  );

  return (
    <>
      <TableContainer
        loading={productsLoading}
        search={false}
        action={action}
        data={products}
        config={config}
      />
    </>
  );
};

export default ProductsListContainer;
