import * as React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import menuIcon from "../assets/icon-menu.svg";
import deleteIcon from "../assets/icon-delete.svg";
import CheckoutItem from "./CheckoutItem";

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
            <div className=" absolute -right-16 top-[3.5rem] px-2 sm:px-0 w-screen sm:w-80 xl:w-[22.5rem] sm:mr-4 md:mr-0  z-20 sm:top-10 sm:-right-[4.3rem] xl:-right-[6rem]">
              <div className=" bg-white rounded-lg shadow-2xl flex flex-col w-full h-full min-h-[20rem] sm:min-h-[13.5rem]">
                <div>
                  <p className="p-4 font-bold text-darkBlue">Cart</p>
                  <hr className="" />
                </div>
                <div className="flex-grow">
                  {/* <p className="font-bold text-darkGrayishBlue w-full text-center">
                    Your cart is empty.
                  </p> */}

                  <div className="flex flex-col gap-5 px-4 py-4 ">
                    <CheckoutItem
                      productName={"Fall Limited Edition Sneakers"}
                      productPrice={125}
                      productQuantity={3}
                      productImageUrl={
                        "https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"
                      }
                      productId={"1234"}
                    />
                    <button className="w-full px-4 py-3 text-sm text-white bg-darkOrange rounded-md">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
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
