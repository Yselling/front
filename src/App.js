import React, { useState, useEffect } from 'react';
import Header from './components/organisms/Header';
import Home from './components/pages/Home';
import Store from './components/pages/Store';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Auction from './components/pages/Auction';

const pages = {
    accueil: Home,
    store: Store,
    auctions: Auction,
    about: About,
    contact: Contact,
    login: Login,
    register: Register,
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

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setIsLogin(true);
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
                {CurrentPageComponent && <CurrentPageComponent onButtonClick={handleButtonClick} />}
            </div>
        </div>
    );
}

export default App;
