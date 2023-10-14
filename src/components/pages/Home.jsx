import React from "react";

const Home = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden min-h-screen">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1561065465-0928c7ee69cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                    alt=""
                    className="w-full h-full object-cover object-right md:object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
            </div>
            <div className="z-5 text-center text-indigo-100 relative mb-20">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Bienvenue sur Yselling ⚡</h2>
                <p className="text-lg leading-6">
                    Découvrez une expérience d'achat unique avec des produits de qualité et des enchères exclusives.
                </p>
                <p className="text-lg leading-6 mb-20">
                    Trouvez ce dont vous avez besoin et plus encore.
                </p>
            </div>
        </div>
    );
}

export default Home;
