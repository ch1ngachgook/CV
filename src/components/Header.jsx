import React from "react";
import meImage from "../images/meImage.jpg"; 

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row mt-14 mb-20 items-center">
      <img
        src={meImage}
        alt="My Photo"
        className="w-80 rounded-lg object-cover mb-4 md:mb-0 md:mr-20"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-semibold text-gray-700 mb-6 mt-4 md:mt-0">
          Versatile <br /> Web Developer
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          I am a dedicated web developer based in Minsk, Belarus. I provide top-notch development services for your upcoming projects.
        </p>
      </div>
    </header>
  );
};

export default Header;