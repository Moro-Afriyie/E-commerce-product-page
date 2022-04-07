import { modalReducer } from "./modalReducer";
import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { sidebarReducer } from "./sidebar.reducer";

export const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  sideBar: sidebarReducer,
});

export type IRootReducerState = ReturnType<typeof rootReducer>;
