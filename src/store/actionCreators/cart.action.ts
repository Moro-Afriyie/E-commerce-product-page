import { ADD_TO_CART, DELETE_FROM_CART } from "../actionTypes/cart.type";

export interface Product {
  productId: string;
  imageUrl: string;
  quantity: number;
  productName: string;
  productPrice: number;
}

export const addToCart = (product: Product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deletFromCart = (productId: string) => {
  return {
    type: DELETE_FROM_CART,
    payload: productId,
  };
};
