import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="grid h-screen px-4 bg-white place-content-center">
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Vindieu 😅
                </p>
                <p className="mt-4 text-gray-500">La page n'existe pas.</p>
                <a
                    href="/"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Retour à l'accueil
                </a>
            </div>
        </div>
    );
}

export default Error;