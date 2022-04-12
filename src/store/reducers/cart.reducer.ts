import { Product } from "../actionCreators/cart.action";
import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes/cart.type";

interface InitState {
  cartItems: Product[];
}
const initialState: InitState = {
  cartItems: [],
};

type IAction =
  | {
      type: typeof ADD_TO_CART;
      payload: Product;
    }
  | {
      type: typeof DELETE_FROM_CART;
      payload: string;
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

    case DELETE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
