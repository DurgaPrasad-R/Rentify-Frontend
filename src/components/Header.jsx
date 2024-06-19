import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className={`bg-black p-4 shadow-lg transition-transform duration-700 ${loaded ? 'translate-y-0' : '-translate-y-20'}`}>      
  <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold">MyApp</div>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaHome className="mr-1" /> About
          </Link>
          <Link to="/search" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaSearch className="mr-1" /> Search
          </Link>
          <Link to="/login" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
          <Link to="/signup" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaUserPlus className="mr-1" /> Signup
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-2 mt-4">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaHome className="mr-1" /> About
          </Link>
          <Link to="/search" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaSearch className="mr-1" /> Search
          </Link>
          <Link to="/login" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
          <Link to="/signup" className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out">
            <FaUserPlus className="mr-1" /> Signup
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
