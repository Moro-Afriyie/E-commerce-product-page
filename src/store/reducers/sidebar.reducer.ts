import { TOGGLE_SIDEBAR } from "../actionTypes/sidebar.type";

const initialState = {
  isOpen: false,
};
type IAction = {
  type: string;
};
export const sidebarReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
