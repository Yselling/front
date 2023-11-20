import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../../toolkit/api.config";
import { Link } from "react-router-dom";

const Contact = ({ onButtonClick }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            message: message
        };
        axios(api("post", 'contact', data))
        .then(() => {
            new toast('Votre message a bien été envoyé 💙', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            new toast(error.response.data.message[0] + ' 😥', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log(error);
        });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
            <div className="md:w-2/3 overflow-hidden pr-8">
                <img
                    src="/img/contact.png"
                    alt=""
                    className="w-full h-full object-cover mt-4 mb-4 ml-4 md:mt-0 md:mb-0 md:ml-0"
                    style={{ clipPath: "polygon(20% 0%, 0% 20%, 9% 39%, 2% 80%, 20% 100%, 38% 90%, 78% 96%, 100% 80%, 94% 32%, 100% 20%, 80% 0%, 37% 6%)" }}
                />
            </div>

            <div className="md:w-1/3 p-8">
                <div className="bg-white rounded-md shadow-lg p-6 h-full">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-600">Nous Contacter ✏️</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black">Adresse e-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-600 text-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="4"
                                className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-600 text-black"
                                style={{ resize: "none" }}
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-sm text-black">
                        Retour à
                        {/* <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            l'accueil <FaArrowRight className="inline ml-1" />
                        </a> */}
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500"> l'accueil<FaArrowRight className="inline ml-1" /></Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
