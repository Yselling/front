import { React, useEffect, useState } from "react";
import api from '../../toolkit/api.config';
import axios from "axios";
import Overlay from "../atoms/Overlay.jsx";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const Profile = () => {
    const [isMeLoaded, setIsMeLoaded] = useState(false);
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        memberSince: "",
        cartCount: 0,
        role: "Client",
    });

    const orders = [
        {
            id: 1,
            date: "2023-01-15",
            products: [
                { id: 101, name: "Produit A", price: 20.0 },
                { id: 102, name: "Produit B", price: 15.0 },
            ],
        },
        {
            id: 2,
            date: "2023-02-22",
            products: [{ id: 201, name: "Produit C", price: 30.0 }],
        },
        {
            id: 3,
            date: "2023-03-01",
            products: [
                { id: 301, name: "Produit D", price: 10.0 },
                { id: 302, name: "Produit E", price: 5.0 },
                { id: 303, name: "Produit F", price: 15.0 },
            ],
        },
        {
            id: 4,
            date: "2023-04-05",
            products: [
                { id: 401, name: "Produit G", price: 20.0 },
                { id: 402, name: "Produit H", price: 15.0 },
            ],
        },
        {
            id: 5,
            date: "2023-05-12",
            products: [{ id: 501, name: "Produit I", price: 30.0 }],
        }
    ];

    const getFormattedDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
        new toast('Déconnexion réussie ! ✅', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
        });
    };

    const get = () => {
        axios(api("get", `me`, null, token))
            .then((response) => {
                setTimeout(() => {
                    setUser({
                        firstName: response.data.first_name,
                        lastName: response.data.last_name,
                        gender: response.data.gender.name,
                        memberSince: getFormattedDate(response.data.created_at),
                        cartCount: response.data.cart.length,
                        role: response.data.role.name === "admin" ? "Admin" : "Client",
                    });
                    setIsMeLoaded(true);
                }, 1000);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        get();
    }, []);

    if (!isMeLoaded) {
        return (<Overlay />);
    }
    return (
        <div className="container mx-auto mt-20 px-4 flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
            <div className="flex flex-col justify-center items-center w-full md:w-1/3">
                <div className="relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:!shadow-none">
                    <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                        <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" alt="" />
                        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <img className="h-full w-full rounded-full" src='https://cdn.discordapp.com/attachments/799680588474482761/1163091757454610453/tanguy1.png?ex=653e509c&is=652bdb9c&hm=a5b745d717e208760789d6dde0aadcdbc0e4dfb0fc53a8b23b7208754303f10a&' alt="" />
                        </div>
                    </div>
                    <div className="mt-16 flex flex-col items-center">
                        <h4 className="text-base md:text-lg lg:text-xl font-bold text-black">
                            {user.firstName} {user.lastName}
                        </h4>
                        <p className="text-xs md:text-sm lg:text-base font-normal text-gray-600">{user.gender}</p>
                    </div>
                    <div className="mt-6 mb-3 flex gap-4 md:gap-6 lg:gap-8">
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-sm md:text-base lg:text-lg font-bold text-navy-700 text-black">{user.memberSince}</p>
                            <p className="text-xs md:text-sm lg:text-base font-normal text-gray-600">Membre depuis</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-sm md:text-base lg:text-lg font-bold text-navy-700 text-black">
                                {user.cartCount}
                            </p>
                            <p className="text-xs md:text-sm lg:text-base font-normal text-gray-600">Articles</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-sm md:text-base lg:text-lg font-bold text-navy-700 text-black">
                                {user.role}
                            </p>
                            <p className="text-xs md:text-sm lg:text-base font-normal text-gray-600">Role</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col items-center">
                        <button className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 focus:outline-none focus:ring focus:border-indigo-300">Modifier le profil</button>
                        <button
                            className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-400 transition duration-300 focus:outline-none focus:ring focus:border-red-300"
                            onClick={handleLogout}
                        >
                            <Link to="/" className="text-white">
                                Déconnexion
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start bg-white rounded-lg p-6 md:p-8 xl:p-10 w-full md:max-w-2xl mx-auto">
                {orders.map((order) => (
                    <div key={order.id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Commande #{order.id}</h3>
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-sm dark:text-gray-600 leading-none text-gray-800"><span className="dark:text-gray-600">Date: </span> {order.date}</p>
                                    <p className="text-sm dark:text-gray-600 leading-none text-gray-800"><span className="dark:text-gray-600">Produits: </span> {order.products.map((product) => product.name).join(', ')}</p>
                                </div>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                                <div className="flex flex-col items-end">
                                    <p className="text-base dark:text-gray-600 xl:text-lg leading-6">{order.products.map((product) => product.price).reduce((a, b) => a + b, 0)}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
