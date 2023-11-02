import { useState, useEffect } from 'react';
import {  FaUser } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import Button from '../atoms/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from 'react-icons/fa';

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
        body.style.transition = 'background-color 1s ease';
        if (theme === 'dark') {
            body.style.backgroundColor = '#242424';
            body.style.color = 'white';
        } else {
            body.style.backgroundColor = '#f3fbff';
            body.style.color = 'black';
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-400 p-3 fixed top-0 w-full z-50">
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
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Button
                        buttonTitle="Yselling⚡"
                        onClick={() => onButtonClick('accueil')}
                        className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                    />
                    {buttons.map((element, index) => (
                        <Button
                            key={index}
                            buttonTitle={element.title}
                            onClick={() => onButtonClick(element.link)}
                            className="hidden md:inline-block text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                        />
                    ))}
                </div>
                <div className="md:hidden">
                    <Button
                        buttonTitle="☰"
                        onClick={handleMobileMenuToggle}
                        className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    {isLogin ? (
                        <>
                            <Button
                                buttonTitle={theme === 'dark' ? '' : ''}
                                onClick={handleThemeToggle}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white flex items-center"
                                icon={theme === 'dark' ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                            />
                            <Button
                                buttonTitle="Profil"
                                onClick={() => onButtonClick('profil')}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                                icon={<FaUser />}
                            />
                            <Button
                                buttonTitle=""
                                onClick={() => manageCartDisplay()}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                                icon={<FaShoppingCart />}
                            />
                        </>
                    ) : (
                        <>
                            <Button
                                buttonTitle=""
                                onClick={handleThemeToggle}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white flex items-center"
                                icon={theme === 'dark' ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                            />
                            <Button
                                buttonTitle="Connexion"
                                onClick={() => onButtonClick('login')}
                                className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                                icon={<FaUser />}
                            />
                        </>
                    )}
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden flex flex-col items-end mt-2">
                    {buttons.map((element, index) => (
                        <Button
                            key={index}
                            buttonTitle={element.title}
                            onClick={() => {
                                onButtonClick(element.link);
                                setMobileMenuOpen(false);
                            }}
                            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white mb-2"
                        />
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
