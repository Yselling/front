import { React, useEffect, useState } from "react";
import api from '../../toolkit/api.config';
import axios from "axios";
import Overlay from "../atoms/Overlay.jsx";

const Profile = () => {
    const [isMeLoaded, setIsMeLoaded] = useState(false);
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        memberSince: "",
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
        const options = {day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
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
        <div className="container mx-auto mt-20 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <div className="mb-8 sm:col-span-2 md:col-span-1 lg:col-span-1">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <img
                            src="https://cdn.discordapp.com/attachments/799680588474482761/1163091757454610453/tanguy1.png?ex=653e509c&is=652bdb9c&hm=a5b745d717e208760789d6dde0aadcdbc0e4dfb0fc53a8b23b7208754303f10a&"
                            alt="Profil"
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h1 className="text-2xl text-black font-bold mb-4">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="text-gray-600 mb-2">
                            <i className="fas fa-venus-mars mr-2 text-lg text-blueGray-400"></i>
                            Genre : {user.gender}
                        </p>
                        <p className="text-black mb-2">
                            <i className="fas  fa-calendar mr-2 text-lg text-blueGray-400"></i>
                            Membre depuis le {user.memberSince}
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-2xl text-black font-bold mb-4">Vos Commandes</h2>
                        {orders.map((order) => (
                            <div key={order.id} className="mb-4">
                                <p className="text-gray-600 mb-2">
                                    <span className="font-semibold text-black">Commande #{order.id}</span> - {order.date}
                                </p>
                                <ul>
                                    {order.products.map((product) => (
                                        <li key={product.id} className=" text-black">
                                            {product.name} - ${product.price}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold text-black mb-4">Actions</h2>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Mettre à jour le profil
                        </button>
                        <br></br>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Changer le mot de passe
                        </button>
                        <br></br>
                        <button className="bg-gray-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300">
                            Un problème ?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
