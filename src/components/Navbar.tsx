import * as React from "react";
import logo from "../assets/logo.svg";

const NavBar: React.FunctionComponent = () => {
  return (
    <header className="h-16 border-b-2 border-lightGrayishBlue">
      <nav className="h-full pt-5">
        <div className="flex gap-12 h-full">
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
      </nav>
    </header>
  );
};

export default NavBar;
