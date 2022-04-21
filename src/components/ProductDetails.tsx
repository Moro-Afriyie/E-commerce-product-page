import * as React from "react";
import { useDispatch } from "react-redux";
import { productImages } from "../models/ProductImages";
import { addToCart } from "../store/actionCreators/cart.action";

const ProductDetails: React.FunctionComponent = () => {
  const [cartNumber, setCartNumber] = React.useState(1);
  const dispatch = useDispatch();

  return (
    <div className="product-details px-4 pt-6 md:px-0 max-w-[32rem] lg:pr-6 w-full  flex flex-col mx-auto md:mx-0 justify-center gap-4">
      <h3 className="uppercase text-darkOrange font-bold tracking-widest">
        sneaker company
      </h3>
      <p className="capitalize text-darkBlue font-bold text-4xl lg:text-5xl md:mb-4">
        Fall limited edition sneakers
      </p>
      <p className="text-darkGrayishBlue ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber against outer sole, they&apos;ll withstand
        everything the weather can offer.
      </p>
      <div>
        <div className="flex gap-3 items-center mt-4 mb-2">
          <p className="text-black font-bold text-2xl 3xl:text-3xl">$125.00</p>
          <div className="px-2 py-[0.1rem] 3xl:py-[0.2rem] 3xl:px-3 bg-paleOrange rounded-md">
            <p className="text-[0.6rem] 3xl:text-base font-bold text-darkOrange font-KumbhSans">
              50%
            </p>
          </div>
        </div>
        <p className="text-sm 3xl:text-base text-grayishBlue font-bold line-through">
          $250.00
        </p>
      </div>
      <div
        className="control-buttons w-full flex flex-col md:flex-row gap-4 mt-4 lg:pr-10 mb-11
            "
      >
        <div className="flex justify-between items-center rounded-lg py-3 3xl:py-5 3xl:px-4 px-2 w-full md:w-32 bg-lightGrayishBlue">
          <button>
            <span
              className="material-icons-outlined text-base text-darkOrange cursor-pointer font-bold"
              onClick={() =>
                setCartNumber((prev: number) => (prev <= 1 ? 1 : prev - 1))
              }
            >
              remove
            </span>
          </button>
          <p className="text-darkBlue font-bold">{cartNumber}</p>
          <button onClick={() => setCartNumber((prev: number) => prev + 1)}>
            <span className="material-icons-outlined cursor-pointer text-base text-darkOrange font-bold">
              add
            </span>
          </button>
        </div>
        <button
          className="flex-grow rounded-xl shadow-2xl flex gap-2 justify-center items-center shadow-paleOrange px-4 py-3 text-base font-bold text-white bg-darkOrange hover:opacity-70"
          onClick={() => {
            dispatch(
              addToCart({
                productId: "1",
                productName: "Fall Limited Edition Sneakers",
                productPrice: 125,
                quantity: cartNumber,
                imageUrl: productImages[0],
              })
            );
            setCartNumber(1);
          }}
        >
          <span className="material-icons-outlined text-base">
            shopping_cart
          </span>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
