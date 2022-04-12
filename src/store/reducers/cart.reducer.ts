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
    case ADD_TO_CART: {
      const newArr = [...state.cartItems];
      const index = newArr.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (index === -1) {
        newArr.push(action.payload);
      } else {
        newArr[index] = action.payload;
      }

      return {
        ...state,
        cartItems: [...newArr],
      };
    }

    default:
      return state;
  }
};
