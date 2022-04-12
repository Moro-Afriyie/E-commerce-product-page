import { modalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { sidebarReducer } from "./sidebar.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  sideBar: sidebarReducer,
  cart: cartReducer,
});

export type IRootReducerState = ReturnType<typeof rootReducer>;
