import React from "react";
import TelegramIcon from "../icons/telegram.svg"; 
import EmailIcon from "../icons/email.svg"; 
import PhoneIcon from "../icons/phone.svg"; 

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-center p-6 rounded-t-lg w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Contacts</h2>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={EmailIcon} alt="Email" className="w-6 h-6 mr-2" />
        <a
          href="mailto:aleksey.lashuk2021@gmail.com"
          className="text-base md:text-lg text-white"
        >
          aleksey.lashuk2021@gmail.com
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={PhoneIcon} alt="Телефон" className="w-6 h-6 mr-2" />
        <p className="text-base md:text-lg text-white">+375291971720</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-2">
        <img src={TelegramIcon} alt="Telegram" className="w-6 h-6 mr-2" />
        <a
          href="https://t.me/ch1ngachgook"
          className="text-base md:text-lg text-white"
        >
          @ch1ngachgook
        </a>
      </div>
    </footer>
  );
};

export default Footer;