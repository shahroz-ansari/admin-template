import { http } from '../../configs/http-client.config';
import type { APIPagination } from '../../containers/api/api.model';
import type { Product } from '../../containers/products/product.model';

export type ProductsAPIRequestType = {
  params: {
    page?: number;
    limit?: number;
    keyword?: string;
    sortBy?: string;
    sortOrder?: string;
    filters?: string;
  };
};

export interface ProductsAPIResponseType {
  data: Product[];
  pagination?: APIPagination;
}

export async function productsService(request: ProductsAPIRequestType) {
  const url = '/products';
  return http<ProductsAPIResponseType>({
    url,
    method: 'GET',
    ...request,
  });
}
