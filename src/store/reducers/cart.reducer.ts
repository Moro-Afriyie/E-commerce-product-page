import { Product } from "../actionCreators/cart.action";
import { ADD_TO_CART } from "../actionTypes/cart.type";

interface InitState {
  cartItems: Product[];
}
const initialState: InitState = {
  cartItems: [],
};

type IAction = {
  type: string;
  payload: Product;
};

export const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
