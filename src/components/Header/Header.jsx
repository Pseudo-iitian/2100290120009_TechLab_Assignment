// import React from 'react';
import { Link } from "react-router-dom";
import DownArrow from "../../assets/down-arrow.png";
import Logo from "../../assets/logo.png";
import RightArrow from "../../assets/right-arrow.png";

function Header() {
  return (
    <header className="bg-white p-4 text-black shadow-md">
      <div className="container mx-auto flex justify-between ">

        <div className="">
          <Link to="/">
            <img src={Logo} alt="" className="w-32" />
          </Link>
        </div>

        <div className="flex justify-between">
        <nav className="md:space-x-8 flex ">
          <Link
            to="/service"
            className="text-black hidden md:block hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="text-black hidden md:block hover:text-gray-800"
          >
            Features
          </Link>
          <Link
            to="/feature"
            className="text-black hidden md:block hover:text-gray-800"
          >
            Community
          </Link>
          <Link
            to="/product"
            className="text-black hidden md:block hover:text-gray-800"
          >
            Blog
          </Link>
          <Link
            to="/testimonial"
            className="text-black hidden md:block hover:text-gray-800"
          >
            Pricing
          </Link>
          <div className="">
            <img
              src={DownArrow}
              alt=""
              className="w-6 cursor-pointer md:hidden"
            />
          </div>
        </nav>

        <div className="space-x-2">
          <Link to="/sign-up">
            <span className="md:pt-2 md:pb-2 md:pl-4 md:pr-4 p-2 text-[12px] flex font-bold md:text-sm text-white bg-customGreen rounded-sm">
              Register Now 
              <img src={RightArrow} alt="Right Arrow" className="w-3 ml-2" />
            </span>
          </Link>
        </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
