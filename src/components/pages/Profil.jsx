import { React, useEffect, useState } from "react";
import api from '../../toolkit/api.config';
import axios from "axios";
import Overlay from "../atoms/Overlay.jsx";
import UserCard from "../atoms/UserCard.jsx";
import '../../index.css';


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
    const [orders, setOrders] = useState([]);

    const getFormattedDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
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
                        cartCount: response.data.cart.length,
                        role: response.data.role.name === "admin" ? "Admin" : "Client",
                    });
                    setOrders(response.data.orders);
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
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        );
    }
    return (
        <div className="container mx-auto mt-20 px-4 flex flex-wrap justify-center">
            <UserCard user={user} />
            <div className="orders-wrapper flex flex-col justify-start items-start bg-white rounded-lg p-8 md:p-10 xl:p-12 w:2/3 mx-auto mt-10">
                <div>
                    {orders.slice(0).reverse().map((order) => (
                        <>
                            <div key={order.id} className="mt-6 md:mt-8 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-8 xl:space-x-10 w-full">
                                <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-6 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-10">
                                        <h3 className="text-2xl xl:text-3xl font-semibold leading-7 text-gray-800">Commande #{order.id}</h3>
                                        <div className="flex justify-start items-start flex-col space-y-3">
                                            <p className="text-base dark:text-gray-600 leading-none text-gray-800"><span className="dark:text-gray-600">Date: </span> {new Date(order.created_at).toLocaleDateString("fr-FR")}</p>
                                            <p className="text-base dark:text-gray-600 leading-none text-gray-800"><span className="dark:text-gray-600">Produits: </span> {order.products.map((product) => product.name).join(', ')}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-10 items-start w-full">
                                        <div className="flex flex-col items-end">
                                            <div className={`flex items-center justify-center px-3 py-2 rounded-md ${order.order_state.name === "paid" ? "bg-blue-100 text-blue-800" : order.order_state.name === "pending" ? "bg-yellow-100 text-yellow-800" : order.order_state.name === "cancelled" ? "bg-red-100 text-red-800" : order.order_state.name === "delivered" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                                {order.order_state.name}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <p className="text-lg dark:text-gray-600 xl:text-xl leading-7">{order.products.map((product) => product.price).reduce((a, b) => a + b, 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-6 w-full" />
                        </>
                    ))}
                </div >
            </div>
        </div>
    );
};

export default Profile;
