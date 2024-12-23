import React from 'react';

const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-slate-800 p-6 rounded-b-lg z-50">
        <div className="max-w-4xl mx-auto flex justify-center space-x-4 md:space-x-10 flex-wrap"> 
          <a href="#about" className="text-white hover:text-gray-300 text-base md:text-lg font-semibold">About me</a>
          <a href="#about-me" className="text-white hover:text-gray-300 text-base md:text-lg font-semibold">My skills</a>
          <a href="#works" className="text-white hover:text-gray-300 text-base md:text-lg font-semibold">My works</a>
          <a href="#offers" className="text-white hover:text-gray-300 text-base md:text-lg font-semibold">Offers</a>
          <a href="#contact" className="text-white hover:text-gray-300 text-base md:text-lg font-semibold">Contacts</a>
        </div>
      </nav>
    );
};

export default Navbar;