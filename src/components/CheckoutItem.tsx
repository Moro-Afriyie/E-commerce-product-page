import * as React from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../assets/icon-delete.svg";
import { deletFromCart } from "../store/actionCreators/cart.action";

interface ICheckoutItemProps {
  productName: string;
  productPrice: number;
  productQuantity: number;
  productImageUrl: string;
  id: string;
}

const CheckoutItem: React.FunctionComponent<ICheckoutItemProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      <div className="h-[3rem] w-[3rem] overflow-hidden rounded-md">
        <img
          className="h-full w-full object-cover"
          src={props.productImageUrl}
        />
      </div>
      <div>
        <p className="text-sm text-darkGrayishBlue capitalize">
          {props.productName}
        </p>
        <p className="text-sm text-darkGrayishBlue">
          {`$${props.productPrice.toFixed(2)} x ${props.productQuantity}`}
          <span className="font-bold text-darkBlue ml-2">{`$${(
            props.productPrice * props.productQuantity
          ).toFixed(2)}`}</span>
        </p>
      </div>
      <div
        className="ml-auto flex items-center"
        onClick={() => dispatch(deletFromCart(props.id))}
      >
        <img src={deleteIcon} alt="deleteIcon" />
      </div>
    </div>
  );
};

export default CheckoutItem;
