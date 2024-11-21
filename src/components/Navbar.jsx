import React, { useState } from 'react';
import '../assets/App.css';
import iconPhone from "../assets/img/icon/icon_phone.svg";
import iconMail from "../assets/img/icon/icon_mail.svg";
import iconInstagram from "../assets/img/icon/icon_instagram.svg";
import iconYouTube from "../assets/img/icon/icon_yt.svg";
import iconFacebook from "../assets/img/icon/icon_fb.svg";
import iconTwitter from "../assets/img/icon/icon_twitter.svg";
import burgerIcon from "../assets/img/icon/burger.svg";
import arrowDownShop from "../assets/img/icon/arrow_down_shop.svg";
import iconUser from "../assets/img/icon/icon_user.svg";
import iconSearch from "../assets/img/icon/icon_search.svg";
import iconCart from "../assets/img/icon/icon_cart.svg";
import iconNavHeart from "../assets/img/icon/icon_nav_heart.svg";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <>
      {/* Information Above Nav */}
      <div className="info-above-nav fixed top-0 z-10 w-full h-14 bg-[#23856D] flex-row justify-center gap-x-10 items-center text-white sm:hidden md:flex">
        <div className="w-fit h-fit flex flex-row">
          <img src={iconPhone} alt="phone" className="w-4 h-4 my-auto mr-2" />
          <p className="text-xs font-normal">(225) 555-0118</p>
        </div>
        <div className="w-fit h-fit flex flex-row">
          <img src={iconMail} alt="mail" className="w-4 h-4 my-auto mr-1" />
          <p className="text-xs font-normal">michelle.rivera@example.com</p>
        </div>
        <div className="w-fit h-fit flex flex-row">
          <p className="text-sm font-bold">Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="w-fit h-fit flex flex-row items-center">
          <p className="text-sm font-bold mr-2">Follow Us</p>
          <p className="text-sm font-bold mr-4">:</p>
          <div className="w-fit h-fit flex flex-row justify-between align-middle items-center gap-x-3">
            <img src={iconInstagram} alt="Instagram" />
            <img src={iconYouTube} alt="YouTube" />
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconTwitter} alt="Twitter" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed sm:top-0 md:top-14 z-10 w-full sm:h-fit md:h-14 bg-white flex sm:flex-col md:flex-row justify-center gap-x-28 items-center">
        <div className="flex flex-row sm:w-full md:w-fit sm:justify-around sm:gap-x-28 md:gap-x-0 sm:mt-5 md:mt-0 sm:mb-5 md:mb-0">
          <h1 className="text-black text-2xl font-bold cursor-pointer">Bandage</h1>
          <img src={burgerIcon} alt="menu" className="md:hidden" onClick={toggleNav} />
        </div>
        <div
          className={[
            "w-fit h-fit",
            navVisible ? "sm:flex" : "sm:hidden",
            "md:flex",
            "sm:flex-col md:flex-row sm:text-center justify-between gap-x-5 sm:gap-y-4 md:gap-y-0 sm:mb-4 md:mb-0 sm:mt-6 md:mt-0 sm:font-normal md:font-bold sm:text-2xl md:text-sm text-[#737373]",
          ].join(" ")}
        >
          <a href="">
            <p className="sm:text-[#252B42] md:text-[#737373]">Home</p>
          </a>
          <a href="" className="flex flex-row w-auto h-fit">
            <p className="md:text-[#252B42] sm:mx-auto">Shop</p>
            <img src={arrowDownShop} alt="arrow_down" className="sm:ml-0 md:ml-2 sm:hidden md:flex" />
          </a>
          <a href="">
            <p>About</p>
          </a>
          <a href="">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Contact</p>
          </a>
          <a href="">
            <p>Pages</p>
          </a>
        </div>

        <div
          className={[
            "w-auto h-fit",
            navVisible ? "sm:flex" : "sm:hidden",
            "md:flex",
            "sm:flex-col md:flex-row justify-center items-center gap-x-7 sm:gap-y-5 md:gap-y-0 sm:mt-4 md:mb-0 sm:mb-4 md:mt-0",
          ].join(" ")}
        >
          <div className="w-fit h-fit flex flex-row items-center cursor-pointer">
            <img src={iconUser} alt="user" className="mr-2 sm:w-5 sm:h-5 md:w-fit md:h-fit" />
            <p className="sm:text-xl md:text-sm font-bold text-[#23A6F0]">Login / Register</p>
          </div>
          <div>
            <img src={iconSearch} alt="search" className="sm:w-7 sm:h-7 md:w-fit md:h-fit cursor-pointer" />
          </div>
          <div className="w-fit h-fit flex flex-row items-center cursor-pointer">
            <img src={iconCart} alt="cart" className="mr-1 sm:w-7 sm:h-7 md:w-fit md:h-fit" />
            <p className="text-xs font-normal text-[#23A6F0]">1</p>
          </div>
          <div className="w-fit h-fit flex flex-row items-center cursor-pointer sm:mb-4 md:mb-0">
            <img src={iconNavHeart} alt="favorites" className="mr-1 sm:w-7 sm:h-7 md:w-fit md:h-fit" />
            <p className="text-xs font-normal text-[#23A6F0]">1</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;