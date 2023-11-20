import React from 'react';
import CartItem from '../atoms/CartItem';
import { Link } from "react-router-dom";

const CartList = ({ items }) => {
    return (
        <div className="cart-list overflow-y-auto mt-16">
            {items &&
                items.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                        <CartItem item={item} />
                    </Link>
                ))}
        </div>
    );
};

export default CartList;