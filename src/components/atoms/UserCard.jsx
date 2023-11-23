import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const UserCard = ({ user }) => {
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
    return (
        <div className="flex flex-col w-full md:w-1/3 mt-10">
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
    );
};

export default UserCard;