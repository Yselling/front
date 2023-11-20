import React, { useState, useEffect, useRef } from 'react';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Auction from './components/pages/Auction';
import Profil from './components/pages/Profil';
import axios from 'axios';
import api from './toolkit/api.config';
import Cart from './components/atoms/Cart';
import { toast } from 'react-toastify';
import { Outlet } from "react-router-dom";

const pages = {
    accueil: Home,
    store: Store,
    auctions: Auction,
    about: About,
    contact: Contact,
    login: Login,
    register: Register,
    profil: Profil,
};

const buttons = [
    { title: 'Boutique', link: 'store' },
    { title: 'Enchères', link: 'auctions' },
    { title: 'A propos', link: 'about' },
    { title: 'Contact', link: 'contact' },
];

function App() {
    const [currentPage, setCurrentPage] = useState('accueil');
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
            });
    }

    const handleAddToCart = (id) => {
        console.log(id);
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
    }, [isLogin]);

    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const CurrentPageComponent = pages[currentPage];

    return (
        <div className="App">
            <Header isLogin={isLogin} setIsLogin={setIsLogin} buttons={buttons} onButtonClick={handleButtonClick} manageCartDisplay={manageCartDisplay} />
            <div>
                <Outlet />
                <Cart cartRef={cartRef} cart={cart} setCart={setCart} clearCart={clearCart} />
            </div>
        </div>
    );
}

export default App;
