import React from 'react';
import CartItem from '../atoms/CartItem';

const CartList = ({ items, setCart }) => {
    return (
        <div className="cart-list overflow-y-auto mt-16">
            {items &&
                items.map((item) => (
                    <CartItem setCart={setCart} key={item.id} item={item} />
                ))}
        </div>
    );
}

export default CartList;