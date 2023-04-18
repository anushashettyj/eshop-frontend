import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      state.quantity = state.products.length;
    },
    removeProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex((product) => product.cartId === action.payload),
        1
      );
      state.quantity = state.products.length;
    }
  }
});

export const {addProduct, removeProduct} = cartSlice.actions;
export default  cartSlice.reducer;
