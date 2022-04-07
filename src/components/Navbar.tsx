import * as React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import menuIcon from "../assets/icon-menu.svg";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="px-4 h-16 md:h-20 md:border-b-2 md:border-lightGrayishBlue">
      <nav className="h-full flex items-center justify-between">
        <div className="flex items-center md:items-start md:pt-6  md:gap-12 h-full">
          <button className="mr-4 md:hidden">
            <img src={menuIcon} alt="menu icon" />
          </button>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden md:flex md:gap-8 md:h-full">
            <li className="flex flex-col cursor-pointer text-sm text-darkGrayishBlue hover:text-lightBoxBackground group">
              <p>Collections</p>
              <div className="hidden group-hover:block h-1 w-full  bg-darkOrange mt-auto"></div>
            </li>
            <li className="flex flex-col cursor-pointer text-sm text-darkGrayishBlue hover:text-lightBoxBackground  group">
              <p>Men</p>
              <div className="hidden group-hover:block h-1 w-full bg-darkOrange mt-auto"></div>
            </li>
            <li className="flex flex-col cursor-pointer text-sm text-darkGrayishBlue hover:text-lightBoxBackground group">
              <p>Women</p>
              <div className="hidden group-hover:block h-1 w-full bg-darkOrange mt-auto"></div>
            </li>
            <li className="flex flex-col cursor-pointer text-sm text-darkGrayishBlue hover:text-lightBoxBackground group">
              <p>About</p>
              <div className="hidden group-hover:block h-1 w-full bg-darkOrange mt-auto"></div>
            </li>
            <li className="flex flex-col cursor-pointer text-sm text-darkGrayishBlue hover:text-lightBoxBackground group">
              <p>Contact</p>
              <div className="hidden group-hover:block h-1 w-full bg-darkOrange mt-auto"></div>
            </li>
          </ul>
        </div>
        {/**cart icon and avatar */}
        <div className="flex gap-5 md:gap-8 items-center">
          <div className="relative cursor-pointer">
            <span className="material-icons-outlined text-darkGrayishBlue hover:text-darkBlue">
              shopping_cart
            </span>
            <div className="w-4 flex items-center justify-center absolute -top-[0.3rem] left-2 rounded-lg bg-darkOrange text-white text-[0.5rem] text-center">
              <p>3</p>
            </div>
            {/* <div className="border border-red-900 absolute z-20 w-80 h-80 left-10 right-0 bg-white"></div> */}
            <div className=" absolute -right-16 top-[3.5rem] px-2 sm:px-0 w-screen sm:w-80 xl:w-[22.5rem] sm:mr-4 md:mr-0  z-20 sm:top-10 sm:-right-[4.3rem] xl:-right-[6rem]">
              <div className=" bg-white rounded-lg shadow-lg w-full h-full min-h-[20rem] sm:min-h-[13.5rem]"></div>
            </div>
          </div>

          <div className="w-7 h-7 md:w-10 md:h-10 border-2 rounded-full hover:border-darkOrange cursor-pointer">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
