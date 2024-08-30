import type { PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../models/product.model';
import { createAppSlice } from '../create-slice';

interface ProductSliceInitialState {
  products: Product[];
}

const initialState: ProductSliceInitialState = {
  products: [],
};

export const productSlice = createAppSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    productsSet: create.reducer((state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    }),
  }),
});

export const { productsSet } = productSlice.actions;
