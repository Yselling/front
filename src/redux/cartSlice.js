import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../toolkit/api.config';
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartDisplayed: false,
        cart: {
            items: [],
            total: 0,
        },
        cartRef: null,
    },
    reducers: {
        setCart: (state, action) => {
            state.cart.items = action.payload.cart;
            state.cart.total = action.payload.total;
        },
        toggleCartDisplay: state => {
            state.cartDisplayed = !state.cartDisplayed;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addOne.fulfilled, (state, action) => {
            const { cart, total } = action.payload;
            state.cart.items = cart;
            state.cart.total = total;
        });
    },
})

export const addOne = createAsyncThunk('cart/addOne', async (payload, { dispatch }) => {
    try {
        let data = {
            product_id: payload,
            amount: 1
        };
        const response = await axios(api('post', 'carts/add-product', data, localStorage.getItem('token')));
        dispatch(setCart(response.data));
        new toast('Produit ajouté au panier ⚡', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const removeOne = createAsyncThunk('cart/removeOne', async (payload, { dispatch }) => {
    try {
        let data = {
            product_id: payload,
            amount: 1
        };
        const response = await axios(api('post', 'carts/decrement-product', data, localStorage.getItem('token')));
        dispatch(setCart(response.data));
        new toast('Produit retiré du panier 🗑️', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
            });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const removeProduct = createAsyncThunk('cart/removeProduct', async (payload, { dispatch }) => {
    try {
        let data = {
            product_id: payload,
        };
        const response = await axios(api('post', 'carts/remove-product', data, localStorage.getItem('token')));
        dispatch(setCart(response.data));
        new toast('Produit retiré du panier 🗑️', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const clearCart = createAsyncThunk('cart/clearCart', async (payload, { dispatch }) => {
    try {
        const response = await axios(api('delete', 'carts/empty', null, localStorage.getItem('token')));
        dispatch(setCart({
            cart: [],
            total: 0,
        }))
        new toast('Votre panier est maintenant vide 🛒', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const addProduct = createAsyncThunk('cart/addProduct', async (payload, { dispatch }) => {
    try {
        let data = {
            product_id: payload.id,
            amount: payload.amount
        };
        const response = await axios(api('post', 'carts/add-product', data, localStorage.getItem('token')));
        dispatch(setCart(response.data));
        new toast('Produit ajouté au panier ⚡', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const { setCart, toggleCartDisplay } = cartSlice.actions

export default cartSlice.reducer