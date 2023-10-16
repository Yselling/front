import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import '../index.css';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';


export default {
    title: 'Atoms/Button',
    component: Button,
};

export const NavigationButton = () => (
    <div className="flex justify-between items-center p-4 bg-indigo-600">
        <div className="flex space-x-4">
            <Button
            onClick={action('switch the page to Home')}
            buttonTitle="Home"
            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
            />
            <Button
            onClick={action('switch the page to Shop')}
            buttonTitle="Shop"
            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
            />
        </div>
    </div>
);


export const LoginButton = () => (
    <div className="flex justify-center items-center h-screen">
        <Button
            onClick={action('login action')}
            buttonTitle="Se connecter"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
    </div>
);

export const DarkLightModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    action(`Switch to ${isDarkMode ? 'light' : 'dark'} mode`)();
    };

    return (
    <div className="flex justify-between items-center p-4 bg-indigo-600">
        <div className="flex space-x-4">
        <Button
            onClick={handleToggleMode}
            buttonTitle=""
            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
            icon={isDarkMode ? <FiMoon className="mr-2" /> : <FiSun className="mr-2" />}
        />
        </div>
    </div>
    );
};

