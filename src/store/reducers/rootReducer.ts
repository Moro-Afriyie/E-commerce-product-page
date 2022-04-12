import { modalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
  modal: modalReducer,
  sideBar: sidebarReducer,
  cart: cartReducer,
});

export type IRootReducerState = ReturnType<typeof rootReducer>;
