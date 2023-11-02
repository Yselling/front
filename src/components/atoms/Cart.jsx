import React from 'react';
import CartList from '../atoms/CartList'

const Cart = ({ cartRef, cart, clearCart, setCart }) => {
    return (
        <div ref={cartRef} className="cart fixed right-0 top-0 bottom-0 w-80 z-10 bg-white shadow-lg transform translate-x-full">
            <CartList items={cart.items} setCart={setCart}/>
            <div className="cart-footer flex justify-between items-center p-4 border-t">
                <div className="cart-total text-gray-700 font-bold">Total: {cart.total}€</div>
                <button onClick={clearCart} className="cart-button text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md shadow">Vider</button>
                <button className="cart-button text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md shadow">Valider</button>
            </div>
        </div>
    );
}

export default Cart;