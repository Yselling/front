import React, { useState, useEffect } from 'react';
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
    const [cart, setCart] = useState([]);

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
            <Header isLogin={isLogin} setIsLogin={setIsLogin} buttons={buttons} onButtonClick={handleButtonClick} />
            <div>
                {CurrentPageComponent 
                    && 
                <CurrentPageComponent 
                    onButtonClick={handleButtonClick} 
                    isLogin={isLogin} 
                    setIsLogin={setIsLogin} 
                />}
            </div>
        </div>
    );
}

export default App;
