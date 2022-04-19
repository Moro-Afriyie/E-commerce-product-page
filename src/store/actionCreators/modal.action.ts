import { CLOSE_MODAL, OPEN_MODAL } from "../actionTypes/modal.type";

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};
