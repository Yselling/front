import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div class="grid h-screen px-4 bg-white place-content-center">
            <div class="text-center">
                <h1 class="font-black text-gray-200 text-9xl">404</h1>
                <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Vindieu 😅
                </p>
                <p class="mt-4 text-gray-500">La page n'existe pas.</p>
                <a
                    href="/"
                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                    Retour à l'accueil
                </a>
            </div>
        </div>
    );
}

export default Error;