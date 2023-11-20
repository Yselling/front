import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
import thunk from 'redux-thunk';
export default configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: [thunk],
})