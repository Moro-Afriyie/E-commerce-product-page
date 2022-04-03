import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen font-KumbhSans">
      <div className="flex flex-col gap-5  max-w-6xl mx-auto h-full w-full">
        {/**Nav Bar */}
        <NavBar />
        <div className="px-16 py-10 flex justify-between">
          <Carousel />
          <div className="product-details   max-w-[32rem] pr-6 w-full  flex flex-col justify-center gap-4">
            <h3 className="uppercase text-darkOrange font-bold tracking-widest">
              sneaker company
            </h3>
            <p className="capitalize text-darkBlue font-bold text-5xl mb-4">
              Fall limited edition sneakers
            </p>
            <p className="text-darkGrayishBlue ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber against outer sole, they&apos;ll
              withstand everything the weather can offer.
            </p>
            <div>
              <div className="flex gap-3 items-center">
                <p className="text-black font-bold text-xl">$125.00</p>
                <div className="px-2 py-[0.1rem] bg-paleOrange rounded-md">
                  <p className="text-[0.6rem] font-bold text-darkOrange font-KumbhSans">
                    50%
                  </p>
                </div>
              </div>
              <p className="text-sm text-grayishBlue font-bold line-through">
                $250.00
              </p>
            </div>
            <div
              className="control-buttons w-full flex gap-4 mt-4 pr-10
            "
            >
              <div className="flex justify-between items-center rounded-md px-2 w-28 bg-lightGrayishBlue">
                <span className="material-icons-outlined text-sm text-darkOrange font-bold">
                  remove
                </span>
                <p className="text-darkBlue font-bold">0</p>
                <span className="material-icons-outlined text-sm text-darkOrange font-bold">
                  add
                </span>
              </div>
              <button className="flex-grow rounded-md shadow-xl flex gap-2 justify-center items-center shadow-paleOrange px-4 py-3 text-sm font-bold text-white bg-darkOrange hover:opacity-70">
                <span className="material-icons-outlined text-sm">
                  shopping_cart
                </span>
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
