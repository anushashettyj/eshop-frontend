import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    errorMessage: null
  },
  reducers : {
    processReq: (state) => {
      state.isFetching= true;
      state.error = false;
    },
    handleError: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload.response.data;
    },
    getAllProducts: (state, action) => {
      state.isFetching= false;
      state.error = false;
      state.errorMessage = null;
      state.products = action.payload;
    }
  }
});

export const {
  processReq,
  handleError,
  getAllProducts
} = productSlice.actions;
export default productSlice.reducer;
