import React from "react";

const About = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden bg-gray-900 min-h-screen text-white">
            <img
                src="https://images.unsplash.com/photo-1623232876312-e44b73035045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-10"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-center items-center text-center">
                <div className="mx-auto mt-10 max-w-2xl lg:w-1/2 lg:mr-8">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Bienvenue sur Yselling 👋🏻</h2>
                    <p className="text-lg leading-8">
                        Découvrez une expérience d'achat unique avec Yselling, votre destination en ligne pour des produits de qualité à des prix imbattables. Explorez notre large gamme de produits, des vêtements aux accessoires, en passant par de nombreux produits high-tech.
                    </p>
                    <p className="mt-4 text-lg leading-8">
                        Plongez dans notre section d'enchères pour dénicher les trésors uniques proposés par nos vendeurs.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:w-1/2">
                    <dl className="grid grid-cols-2 gap-8 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col items-center text-white">
                            <dt className="text-base leading-7">Utilisateurs 🙋🏻‍♂️</dt>
                            <dd className="text-2xl font-bold leading-9">1200+</dd>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <dt className="text-base leading-7">Livraison 📦</dt>
                            <dd className="text-2xl font-bold leading-9">Sous 4 jours</dd>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <dt className="text-base leading-7">Catégories 📚</dt>
                            <dd className="text-2xl font-bold leading-9">300+</dd>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <dt className="text-base leading-7">Satisfaction 😄</dt>
                            <dd className="text-2xl font-bold leading-9">Garantie</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default About;
