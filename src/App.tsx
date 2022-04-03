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
          <div className="product-details  border max-w-[32rem] pr-6 w-full border-red-900 flex flex-col justify-center gap-4">
            <h3 className="uppercase text-darkOrange font-bold tracking-widest">
              sneaker company
            </h3>
            <p className="capitalize text-black font-bold text-5xl mb-4">
              Fall limited edition sneakers
            </p>
            <p className="text-darkGrayishBlue ">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber against outer sole, they&apos;ll
              withstand everything the weather can offer.
            </p>
            <div className="flex gap-3 items-center">
              <p className="text-black font-bold text-xl">$125.00</p>
              <div className="px-2 py-[0.1rem] bg-paleOrange rounded-md">
                <p className="text-[0.6rem] font-bold text-darkOrange font-KumbhSans">
                  50%
                </p>
              </div>
            </div>
            <p>$250.00</p>
            <div className="control-buttons">buttons</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
