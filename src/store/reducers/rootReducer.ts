import { modalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { testReducer } from "./testReducer";

export const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
});

export type IRootReducerState = ReturnType<typeof rootReducer>;
