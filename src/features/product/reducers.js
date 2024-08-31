import { createReducer } from '@reduxjs/toolkit';
import {
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct
} from './Action';

let currentProductId = 9;

export default createReducer([], (builder) => {
    builder
        .addCase(fetchProducts, (state, action) => {
            return action.payload;
        })
        .addCase(addProduct, (state, action) => {
            state.push({ id: ++currentProductId, ...action.payload });
        })
        .addCase(updateProduct, (state, action) => {
            const productIndex = state.findIndex(
                (product) => product.id === action.payload.id
            );
            if (productIndex !== -1) {
                state[productIndex] = action.payload;
            }
        })
        .addCase(deleteProduct, (state, action) => {
            const productIndex = state.findIndex(
                (product) => product.id === action.payload.id
            );
            if (productIndex !== -1) {
                state.splice(productIndex, 1);
            }
        });
});
