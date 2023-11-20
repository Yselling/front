import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import api from '../../toolkit/api.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        axios(api("post", 'login', data))
            .then((response) => {
                const bearerToken = response.data.access_token;
                localStorage.setItem('token', bearerToken);
                window.location.href = '/';
                new toast('Bienvenue ! 🚀', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
                });
            })
            .catch((error) => {
                console.error(error);
                new toast('Mauvais identifiants ! 🥊', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
                });
            });
    };

    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-gray-900 min-h-screen">
            <img
                src="/img/login.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-20"
            />

            <div className="absolute sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded-md">
                <div className="flex flex-col items-center">
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">Se connecter 🚩</h2>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Adresse e-mail</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Mot de passe</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Mot de passe oublié ?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Connexion</button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm text-black">
                    Pas encore inscrit ?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                        Je crée mon compte <FaArrowRight className="inline ml-1" />
                    </Link>
                </p>
            </div>
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
        </div>
    );
}

export default Login;
