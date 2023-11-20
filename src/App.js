import React, { useState, useEffect, useRef } from 'react';
import Header from './components/organisms/Header';
import axios from 'axios';
import api from './toolkit/api.config';
import Cart from './components/atoms/Cart';
import { toast } from 'react-toastify';
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const buttons = [
    { title: 'Boutique', link: 'store' },
    { title: 'Contact', link: 'contact' },
    { title: 'A propos', link: 'about' },
];

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [cartDisplayed, setCartDisplayed] = useState(false);
    const [cart, setCart] = useState({
        items: [],
        total: 0,
    });
    const cartRef = useRef(null);

    useEffect(() => {
        if (cartRef.current && cartDisplayed) {
            cartRef.current.style.transition = 'transform 0.4s ease-in-out';
            cartRef.current.style.transform = 'translateX(0)';
        }
        if (cartRef.current && !cartDisplayed) {
            cartRef.current.style.transition = 'transform 0.4s ease-in-out';
            cartRef.current.style.transform = 'translateX(100%)';
        }
    }, [cartDisplayed]);

    const manageCartDisplay = () => {
        setCartDisplayed(!cartDisplayed);
    };

    const clearCart = () => {
        axios(api('delete', 'carts/empty', null, localStorage.getItem('token')))
            .then(() => {
                setCart({
                    items: [],
                    total: 0,
                });
                new toast('Panier vidé 🛒', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleAddToCart = (id) => {
        let data = {
            amount: 1,
            product_id: id,
        };
        axios(api('post', 'carts/add-product', data, localStorage.getItem('token')))
            .then((response) => {
                setCart(
                    {
                        items: response.data.cart,
                        total: response.data.total,
                    }
                )
                new toast('Produit ajouté au panier 🛒', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setIsLogin(true);
            axios(api('get', 'carts/my-cart', null, storedToken))
                .then((response) => {
                    setCart(
                        {
                            items: response.data.cart,
                            total: response.data.total,
                        }
                    )
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <div className="App">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Header isLogin={isLogin} buttons={buttons} manageCartDisplay={manageCartDisplay} />
            <div>
                <Outlet />
                <Cart cartRef={cartRef} cart={cart} setCart={setCart} clearCart={clearCart} />
            </div>
        </div>
    );
}

export default App;
