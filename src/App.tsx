import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import NavBar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { IRootReducerState } from "./store/reducers/rootReducer";

function App() {
  const isModalOpen = useSelector(
    (state: IRootReducerState) => state.modal.isOpen
  );
  return (
    <main className="min-h-screen font-KumbhSans">
      <div className="flex flex-col gap-5  max-w-6xl mx-auto h-full w-full">
        {/**Nav Bar */}
        <NavBar />
        <div className="px-16 py-10 flex justify-between">
          <div className="max-w-[25rem]">
            <Carousel />
          </div>
          <ProductDetails />
        </div>
      </div>
      {isModalOpen && <Modal />}
    </main>
  );
}

export default App;
