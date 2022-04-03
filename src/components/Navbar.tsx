import * as React from "react";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="h-20 border-b-2 border-lightGrayishBlue">
      <nav className="h-full flex justify-between">
        <div className="flex pt-6  gap-12 h-full">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="flex gap-8 h-full">
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
        <div className="flex gap-8 items-center">
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="cart" className="h-4" />
            <div className="w-4 flex items-center justify-center absolute -top-[0.4rem] left-2 rounded-lg bg-darkOrange text-white text-[0.5rem] text-center">
              <p>3</p>
            </div>
          </div>
          <div className="w-10 h-10 border-2 rounded-full hover:border-darkOrange cursor-pointer">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
