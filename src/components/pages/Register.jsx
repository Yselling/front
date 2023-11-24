import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from '../../toolkit/api.config';
import axios from "axios";
import Select from '../atoms/Select';
import { Link } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gendersLoaded, setGendersLoaded] = useState(false);
    const [genderList, setGenderList] = useState([]);
    const [gender, setGender] = useState(1);

    const get = () => {
        axios(api("get", `genders`))
            .then((response) => {
                setGenderList(response.data.data);
                setGendersLoaded(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        get();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            gender_id: gender,
            email: email,
            password: password,
            confirm_password: passwordConfirmation
        };

        axios(api("post", 'register', data))
            .then((response) => {
                const bearerToken = response.data.access_token;
                localStorage.setItem('token', bearerToken);
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-gray-900 min-h-screen">
            <img
                src="/img/login.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-20"
            />

            <div className="absolute mt-16 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-md grid gap-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">S'inscrire ✨</h2>
                </div>

                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-black">Prénom</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-black">Nom</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Adresse e-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Mot de passe</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <div>
                        <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-6 text-black">Confirmation du mot de passe</label>
                        <input
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            autoComplete="new-password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    {gendersLoaded ? (
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-black">Sélection du genre</label>
                            <Select
                                elements={genderList}
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </div>
                    ) : (
                        null
                    )}

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>
                    </div>
                </form>
                <p className="mt-6 text-center text-sm text-black">
                    Déjà inscrit ?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                        Se connecter <FaArrowRight className="inline ml-1" />
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
