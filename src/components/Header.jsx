// Header.jsx
import React, {useState} from 'react';
import {Search, LogIn, LogOut} from 'react-feather';
import Login from '../pages/Login';
import {Link, useNavigate} from "react-router-dom";
import Logout from "../components/Logout.jsx";

const Header = ({onSearch, searchTerm, setSearchTerm, toggleLoginStatus}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isLoggedIn = localStorage.getItem('token') !== null;
    const navigate = useNavigate();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        // Perform logout logic here, e.g., remove token from localStorage
        localStorage.removeItem('token');
        // Redirect to login page
        navigate('/');
    };

    return (
        <div className="relative">
            <header className="text-blue-700 p-4 fixed top-0 z-10 bg-white w-full border-b-2">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="flex gap-2">
                        <img src="https://flowbite.com/docs/images/logo.svg" className=""
                             alt="FlowBite Logo"/>
                        <span
                            className="self-center text-xl font-semibold font-noto sm:text-2xl whitespace-nowrap dark:text-white">JobHunter</span>
                    </a>
                    <button
                        onClick={handleMobileMenuToggle}
                        className="md:hidden text-white focus:outline-none absolute right-4"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden absolute top-16 right-4 bg-blue-700 p-4 rounded-md">
                            {/* Search Input in Mobile Menu */}
                            <div
                                className="mb-2 flex flex-col items-center space-x-2"> {/* Tambahkan class space-x-2 di sini juga */}
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="px-2 py-1 rounded-md text-red-950"
                                />
                                <button
                                    onClick={onSearch}
                                    className="bg-white text-blue-700 px-2 py-1 rounded-md ml-2"
                                >
                                    <Search size={18}/>
                                </button>
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">

                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                           role="menuitem">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                           role="menuitem">History</a>
                                    </li>
                                    <li onClick={handleLogout}>
                                        <span href="#"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                              role="menuitem">Log out</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Login/Logout Button in Mobile Menu */}
                            {/*<Link*/}
                            {/*    onClick={toggleLoginStatus}*/}
                            {/*    className="px-4 py-1 bg-green-500 rounded-md flex items-center"*/}
                            {/*>*/}
                            {/*    {isLoggedIn ? `<Logout/>` : 'Login'} <LogIn size={18} className="ml-2" />*/}
                            {/*</Link>*/}
                        </div>
                    )}

                    {/* Login/Logout Button in Desktop (shown when mobile menu is closed) */}
                    <span>
                        {isLoggedIn ? (
                            <>
                                <button type="button"
                                        className="hidden sm:block flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full"
                                         src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                         alt="user photo"></img>
                                </button>
                                <div
                                    className="z-50 hidden text-start my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                                    id="dropdown-user">
                                    <ul className="py-1 px-3 text-start" role="none">
                                        <li>
                                            <Link to="/edituser"
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                               role="menuitem">Profile</Link>
                                        </li>
                                        <li>
                                            <a href="#"
                                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                               role="menuitem">History</a>
                                        </li>
                                        <li onClick={handleLogout}>
                                        <span href="#"
                                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                              role="menuitem">Log out</span>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <Link to="/login"
                                  className="hidden md:flex items-center px-4 py-1 bg-blue-500 text-white rounded-md flex items-center">
                                Login
                                <LogIn size={18} className="ml-2"/>
                            </Link>
                        )}
                    </span>
                </div>
            </header>
        </div>
    )
        ;
};

export default Header;