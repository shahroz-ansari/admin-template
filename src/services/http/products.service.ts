import { http } from '../../configs/http-client.config';
import type { Product } from '../../models/product.model';

export type ProductsAPIRequestType = {
  params: {
    page?: number;
    limit?: number;
    keyword?: string;
  };
};

export interface ProductsAPIResponseType {
  data: Product[];
}

export async function productsService(request: ProductsAPIRequestType) {
  const url = '/products';
  return http<ProductsAPIResponseType>({
    url,
    method: 'GET',
    ...request,
  });
}
