import React from 'react';
import axios from 'axios';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import api from '../../toolkit/api.config';
import { useDispatch } from 'react-redux'
import { addOne, removeOne, removeProduct } from '../../redux/cartSlice'

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addOne(item.id));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeProduct(item.id));
    }

    const handleDecreaseItem = (item) => {
        dispatch(removeOne(item.id));
    }

    return (
        <div key={item.id} className="cart-item flex justify-between items-center p-4 border-b">
            <div className="cart-item-image w-16 h-16 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="cart-item-details flex-grow ml-2">
                <div className="cart-item-name font-bold">{item.name}</div>
                <div className="cart-item-price">{item.price}€</div>
            </div>
            <div className="cart-item-amount flex justify-between items-center">
                <button onClick={() => handleDecreaseItem(item)} className="cart-item-amount-button text-gray-400 hover:text-gray-600">
                    <FaMinus />
                </button>
                <div className="cart-item-amount-value mx-2">{item.pivot.amount}</div>
                <button onClick={() => handleAddItem(item)} className="cart-item-amount-button text-gray-400 hover:text-gray-600">
                    <FaPlus />
                </button>
            </div>
            <button onClick={() => handleRemoveItem(item)} className="cart-item-delete text-gray-400 hover:text-gray-600">
                <FaTimes />
            </button>
        </div>
    );
}

export default CartItem;