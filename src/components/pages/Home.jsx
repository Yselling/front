const Home = ({ theme }) => {
    const isDarkMode = theme === "dark";

    return (
        <div className="relative flex items-center justify-center overflow-hidden min-h-screen bg-gray-900">
            <div className="absolute inset-0">
                <img
                    src="/img/home.png"
                    alt=""
                    className={`w-full h-full object-cover object-center md:object-right lg:object-center opacity-80 ${isDarkMode ? 'dark-mode' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
            </div>
            <div className="z-5 text-center text-indigo-100 relative mb-20 p-4">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-4">Bienvenue sur Yselling ⚡</h2>
                <p className="text-sm md:text-lg leading-6">
                    Découvrez une expérience d'achat unique avec des produits de qualité et des enchères exclusives.
                </p>
                <p className="text-sm md:text-lg leading-6 mb-20">
                    Trouvez ce dont vous avez besoin et plus encore.
                </p>
            </div>
        </div>
    );
}

export default Home;
