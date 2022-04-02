import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeTestValue } from "./store/actionCreators/testAction";
import { IRootReducerState } from "./store/reducers/rootReducer";

function App() {
  const testValue = useSelector(
    (state: IRootReducerState) => state.test.testValue
  );
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen font-KumbhSans">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h3 className="text-gray-900 text-xl capitalize">{testValue}</h3>
      <button
        className="bg-red-500 px-4 py-2 border border-red-900 shadow-lg rounded-md"
        onClick={() => dispatch(changeTestValue("welcome to my page"))}
      >
        change value
      </button>
    </div>
  );
}

export default App;
