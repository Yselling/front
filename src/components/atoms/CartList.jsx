import React from 'react';
import CartItem from '../atoms/CartItem';

const CartList = ({ items }) => {
    return (
        <div className="cart-list overflow-y-auto mt-16">
            {items &&
                items.map((item) => (
                    <CartItem item={item} />
                ))}
        </div>
    );
};

export default CartList;