import { configureStore } from '@reduxjs/toolkit';
import productReducers from '../features/product/reducers';

export default configureStore({
  reducer: {
    products: productReducers
  }
});