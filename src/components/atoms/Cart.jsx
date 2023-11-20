import React from 'react';
import CartList from '../atoms/CartList'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify';

const Cart = ({ cartRef }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        if (cart.items.length === 0) {
            new toast('Votre panier est déjà vide 🛒', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
            });
            return;
        }
        dispatch(clearCart());
    }

    return (
        <div ref={cartRef} className="cart fixed right-0 top-0 bottom-0 w-80 z-10 bg-white shadow-lg transform translate-x-full overflow-y-auto">
            <CartList items={cart.items} />
            <div className="cart-footer flex justify-between items-center p-4">
                <div className="cart-total font-bold">
                    { cart.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€
                </div>
                <button onClick={handleClearCart} className="cart-button text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md shadow">Vider</button>
                <button className="cart-button text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md shadow">Valider</button>
            </div>
        </div>
    );
}

export default Cart;