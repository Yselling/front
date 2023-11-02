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
    const [cart, setCart] = useState([]);
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

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setIsLogin(true);
            axios(api('get', 'carts/my-cart', null, storedToken))
                .then((response) => {
                    setCart(response.data.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    const handleButtonClick = (page) => {
        setCurrentPage(page);
    };

    const CurrentPageComponent = pages[currentPage];

    return (
        <div className="App">
            <Header isLogin={isLogin} setIsLogin={setIsLogin} buttons={buttons} onButtonClick={handleButtonClick} manageCartDisplay={manageCartDisplay} />
            <div>
                {CurrentPageComponent
                    &&
                    <CurrentPageComponent
                        onButtonClick={handleButtonClick}
                        isLogin={isLogin}
                        setIsLogin={setIsLogin}
                    />}
                <div ref={cartRef} className="cart fixed right-0 top-0 bottom-0 w-80 z-10 bg-white shadow-lg transform translate-x-full">
                </div>
            </div>
        </div>
    );
}

export default App;
