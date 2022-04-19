import { CLOSE_MODAL, OPEN_MODAL } from "../actionTypes/modal.type";

const initialState = {
  isOpen: false,
};

type IAction = {
  type: string;
};

export const modalReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };

    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    default:
      return state;
  }
};
