import React, { useState, useEffect, useRef } from 'react';
import Header from './components/organisms/Header';
import axios from 'axios';
import api from './toolkit/api.config';
import Cart from './components/atoms/Cart';
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { setCart, toggleCartDisplay } from './redux/cartSlice'

const buttons = [
    { title: 'Boutique', link: 'store' },
    { title: 'Contact', link: 'contact' },
    { title: 'A propos', link: 'about' },
];

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const cartDisplayed = useSelector((state) => state.cart.cartDisplayed);
    const cartRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        cartRef.current.style.transition = 'transform 0.4s ease-in-out';
        if (cartRef.current && cartDisplayed) {
            cartRef.current.style.transform = 'translateX(0)';
        } else {
            cartRef.current.style.transform = 'translateX(100%)';
        }
    }, [cartDisplayed]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            axios(api('get', 'carts/my-cart', null, storedToken))
                .then((response) => {
                    setIsLogin(true);
                    dispatch(setCart(response.data));
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
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Header isLogin={isLogin} buttons={buttons} manageCartDisplay={() => dispatch(toggleCartDisplay())} />
            <div>
                <Outlet />
                <Cart cartRef={cartRef} />
            </div>
        </div>
    );
}

export default App;
