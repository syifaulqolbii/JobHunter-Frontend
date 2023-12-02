// Header.jsx
import React, { useState } from 'react';
import { Search, LogIn, LogOut } from 'react-feather';

const Header = ({ onSearch, searchTerm, setSearchTerm, isLoggedIn, toggleLoginStatus }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <a href="https://flowbite.com" className="flex ms-2 md:me-24">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3"
            alt="FlowBite Logo"/>
          <span
            className="self-center text-xl font-semibold font-noto sm:text-2xl whitespace-nowrap dark:text-white">JobHunter</span>
        </a>

        {/* Search Input */}
        <div className="hidden md:flex items-center space-x-2"> {/* Tambahkan class space-x-2 untuk memberikan margin antara input dan ikon search */}
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 rounded-md text-red-950"
          />
          <button onClick={onSearch} className="bg-white text-blue-700 px-2 py-1 rounded-md">
            <Search size={18} />
          </button>
        </div>

        {/* Burger Menu Icon */}
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
            <div className="mb-2 flex items-center space-x-2"> {/* Tambahkan class space-x-2 di sini juga */}
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
                <Search size={18} />
              </button>
            </div>

            {/* Login/Logout Button in Mobile Menu */}
            <button
              onClick={toggleLoginStatus}
              className="px-4 py-1 bg-green-500 rounded-md flex items-center"
            >
              {isLoggedIn ? 'Logout' : 'Login'} <LogIn size={18} className="ml-2" />
            </button>
          </div>
        )}

        {/* Login/Logout Button in Desktop (shown when mobile menu is closed) */}
        <button
          onClick={toggleLoginStatus}
          className="hidden md:flex items-center px-4 py-1 bg-green-500 rounded-md"
        >
          {isLoggedIn ? 'Logout' : 'Login'} <LogOut size={18} className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;
