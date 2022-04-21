import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import NavBar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { IRootReducerState } from "./store/reducers/rootReducer";
import closeIcon from "./assets/icon-close.svg";
import { toggleSidebar } from "./store/actionCreators/sidebar.action";

function App() {
  const isModalOpen = useSelector(
    (state: IRootReducerState) => state.modal.isOpen
  );
  const isSideBarOpen = useSelector(
    (state: IRootReducerState) => state.sideBar.isOpen
  );
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen font-KumbhSans relative">
      {isSideBarOpen && (
        <div className="side-bar md:hidden fixed  inset-0  w-full h-full z-30 bg-blackBackground">
          <div className="bg-white w-60 h-full px-6 py-4">
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => dispatch(toggleSidebar())}
            />
            <ul className="flex mt-10 flex-col gap-4 font-bold text-darkBlue">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
      <div className="flex flex-col md:gap-10  md:max-w-6xl md:mx-auto h-full w-full">
        <NavBar />
        <div className="md:px-8 lg:px-16 md:py-10 3xl:pl-[3rem] 3xl:pr-0  flex flex-col md:flex-row md:gap-8 md:justify-between">
          <div className="w-full md:max-w-[25rem] 3xl:max-w-[28rem]">
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
