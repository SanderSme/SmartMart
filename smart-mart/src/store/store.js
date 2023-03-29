import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './modules/productsSlice';
import cartSlice from './modules/cartSlice';
import loaderSlice from './modules/loaderSlice';

const reducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
    loader: loaderSlice,
});

const index = configureStore({
    reducer
})

export default index