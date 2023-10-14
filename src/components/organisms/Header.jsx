import React from 'react';
import { FaUser } from 'react-icons/fa';
import Button from '../atoms/Button';

const Header = ({ buttons, onButtonClick, isLogin }) => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-400 p-3 fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                <Button
                    buttonTitle="Yselling⚡"
                    onClick={() => onButtonClick("accueil")}
                    className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                />
                    {buttons.map((element, index) => (
                        <Button
                            key={index}
                            buttonTitle={element.title}
                            onClick={() => onButtonClick(element.link)}
                            className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                        />
                    ))}
                </div>
                {isLogin ? <Button
                    buttonTitle="Profil"
                    onClick={() => onButtonClick("profil")}
                    className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                    icon={<FaUser />}
                /> : <Button
                    buttonTitle="Connexion"
                    onClick={() => onButtonClick("login")}
                    className="text-white font-bold hover:text-white transition duration-300 px-3 py-1 rounded-md border border-transparent hover:border-white"
                    icon={<FaUser />}
                />}
            </div>
        </nav>
    );
}

export default Header;
