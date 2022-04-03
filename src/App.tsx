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
        </div>
      </div>
    </main>
  );
}

export default App;
