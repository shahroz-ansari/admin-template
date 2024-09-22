import type { PayloadAction } from '@reduxjs/toolkit';
import type { ProductsAPIResponseType } from '../../services/http/products.service';
import { createAppSlice } from '../../store/create-slice';

interface ProductSliceInitialState {
  products: ProductsAPIResponseType;
}

const initialState: ProductSliceInitialState = {
  products: {
    data: [],
  },
};

export const productSlice = createAppSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    productsSet: create.reducer(
      (state, action: PayloadAction<ProductsAPIResponseType>) => {
        state.products = action.payload;
      },
    ),
  }),
});

export const { productsSet } = productSlice.actions;
