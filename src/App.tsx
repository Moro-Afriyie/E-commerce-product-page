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
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h3 className="text-gray-900 text-xl font-mono capitalize">
        {testValue}
      </h3>
      <button
        className="bg-red-500 px-8 py-4 border border-red-900 shadow-lg rounded-md"
        onClick={() => dispatch(changeTestValue("welcome to my page"))}
      >
        change value
      </button>
    </div>
  );
}

export default App;
