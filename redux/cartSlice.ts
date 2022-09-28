import { RootState } from './store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../pages/api/getProducts';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state: CartState, action: PayloadAction<{ id: string }>) => {
      let newCart = [...state.items];
      const index = state.items.findIndex(item => item._id === action.payload.id);

      if (index !== -1) {
        newCart.splice(index, 1);
      } else {
        console.log(`There is no product with id ${action.payload.id} in a cart`);
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartItemsSelector = (state: RootState) => state.cart.items;

export const singleCartItemSelector = (state: RootState, id: string) =>
  state.cart.items.filter(item => item._id === id);

export const totalPriceSelector = (state: RootState) => state.cart.items.reduce((acc, item) => (acc += item.price), 0);

export default cartSlice.reducer;
