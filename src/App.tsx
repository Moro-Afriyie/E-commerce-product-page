import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/Navbar";
import { changeTestValue } from "./store/actionCreators/testAction";
import { IRootReducerState } from "./store/reducers/rootReducer";

function App() {
  const testValue = useSelector(
    (state: IRootReducerState) => state.test.testValue
  );
  const dispatch = useDispatch();

  return (
    <main className="min-h-screen font-KumbhSans">
      <div className="flex flex-col gap-5  max-w-6xl mx-auto h-full w-full">
        {/**Nav Bar */}
        <NavBar />
        <div>
          <h1>product page</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
