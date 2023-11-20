import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import api from '../../toolkit/api.config';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    useEffect(() => {
        axios(api('get', `products/${id}`))
            .then((response) => {
                setProduct(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleAddToCart = (id) => {
        const payload = {
            id: id,
            amount: quantity,
        };
        dispatch(addProduct(payload));
    };

    if (!product) {
        return <p>Chargement en cours...</p>;
    }

    if (!product.id) {
        return <p>Produit introuvable</p>;
    }

    return (
        <section className="overflow-hidden py-11">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 md:w-2/5 ">
                        <div className="top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img src={product.image} alt="" className="object-center rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20">
                            <div className="mb-8 ">
                                <span className="text-lg font-medium text-indigo-500 dark:text-indigo-500">New</span>
                                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">
                                    {product.name}
                                </h2>
                                <div className="flex flex-wrap items-center mb-5 -mx-3">
                                    <div className="px-3">
                                        <span className="bg-blue-100 text-blue-500 px-4 py-2 rounded-md font-medium text-sm">
                                            {product.category.name}
                                        </span>
                                    </div>
                                </div>
                                <p className="max-w-md mb-8">
                                    {product.description}
                                </p>
                                <p className="inline-block mb-8 text-4xl font-bold ">
                                    <span className="text-2xl font-normal">{product.price}€</span>
                                    <span
                                        className="text-base font-normal line-through"> {(product.price * 1.15).toFixed(2)}€</span>
                                </p>
                                <p className="text-green-600 font-bold dark:text-green-600 ">{product.quantity} en stock</p>
                            </div>
                            <div className="w-32 mb-8">
                                <label className="w-full text-xl font-semibold">Quantité</label>
                                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                    <button
                                        onClick={handleDecrease}
                                        className="w-1/3 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input
                                        type="text"
                                        value={quantity}
                                        onChange={ () => {}}
                                        className="flex items-center w-1/3 font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none focus:outline-none hover:text-black no-spinner"
                                        placeholder="1"
                                    />
                                    <button
                                        onClick={handleIncrease}
                                        className="w-1/3 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer hover:bg-gray-400"
                                    >
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 ">
                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    className="w-50 px-6 py-4 mb-6 font-medium text-white transition duration-200 bg-indigo-500 rounded-md shadow-md hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                                    Ajouter au panier 🥏
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
