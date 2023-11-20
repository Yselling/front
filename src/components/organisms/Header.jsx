import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import Button from '../atoms/Button';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Outlet, Link } from "react-router-dom";

const Header = ({ buttons, onButtonClick, isLogin, manageCartDisplay }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const body = document.body;
        const cart = document.querySelector('.cart');
        body.style.transition = 'background-color 1s ease';
        cart.style.transition = 'background-color 1s ease';
        if (theme === 'dark') {
            body.style.backgroundColor = '#242424';
            body.style.color = 'white';
            cart.style.backgroundColor = '#242424';
            cart.style.color = 'white';
        } else {
            body.style.backgroundColor = '#f3fbff';
            body.style.color = 'black';
            cart.style.backgroundColor = '#f3fbff';
            cart.style.color = 'black';
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-400 p-3 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white">
                        Yselling⚡
                    </Link>
                    {buttons.map((element, index) => (
                        <Link
                            key={index}
                            to={element.link}
                            className="hidden md:inline-block text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                        >
                            {element.title}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={handleMobileMenuToggle}
                        className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                    >
                        ☰
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleThemeToggle}
                        className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white flex items-center"
                    >
                        {theme === 'dark' ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                    </button>
                    {isLogin ? (
                        <>
                            <Link
                                to="/profile"
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                            >
                                Profil
                            </Link>
                            <button
                                onClick={() => manageCartDisplay()}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                            >
                                <FaShoppingCart />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                            >
                                Connexion
                            </Link>
                        </>
                    )}
                </div>

            </div>
            {mobileMenuOpen && (
                <div className="md:hidden flex flex-col items-end mt-2">
                    {buttons.map((element, index) => (
                        <Link
                            key={index}
                            to={element.link}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white mb-2"
                        >
                            {element.title}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
