import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './modules/productsSlice';
import cartSlice from './modules/cartSlice';
import loaderSlice from './modules/loaderSlice';
import errorSlice from "./modules/errorSlice"

const reducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
    loader: loaderSlice,
    error: errorSlice,
});

const index = configureStore({
    reducer
})

export default index