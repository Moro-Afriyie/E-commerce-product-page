import { TOGGLE_MODAL } from "../actionTypes/modal";

const initialState = {
  isOpen: false,
};

type IAction = {
  type: typeof TOGGLE_MODAL;
};

export const modalReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
