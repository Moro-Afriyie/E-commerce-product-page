import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProductDetailsProps {}

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = () => {
  const [cartNumber, setCartNumber] = React.useState(0);

  return (
    <div className="product-details px-4 pt-6 md:px-0 max-w-[32rem] md:pr-6 w-full  flex flex-col justify-center gap-4">
      <h3 className="uppercase text-darkOrange font-bold tracking-widest">
        sneaker company
      </h3>
      <p className="capitalize text-darkBlue font-bold text-4xl md:text-5xl md:mb-4">
        Fall limited edition sneakers
      </p>
      <p className="text-darkGrayishBlue ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber against outer sole, they&apos;ll withstand
        everything the weather can offer.
      </p>
      <div>
        <div className="flex gap-3 items-center">
          <p className="text-black font-bold text-xl">$125.00</p>
          <div className="px-2 py-[0.1rem] bg-paleOrange rounded-md">
            <p className="text-[0.6rem] font-bold text-darkOrange font-KumbhSans">
              50%
            </p>
          </div>
        </div>
        <p className="text-sm text-grayishBlue font-bold line-through">
          $250.00
        </p>
      </div>
      <div
        className="control-buttons w-full flex flex-col md:flex-row gap-4 mt-4 md:pr-10 mb-11
            "
      >
        <div className="flex justify-between items-center rounded-md py-3 px-2 w-full md:w-28 bg-lightGrayishBlue">
          <button>
            <span
              className="material-icons-outlined text-sm text-darkOrange cursor-pointer font-bold"
              onClick={() =>
                setCartNumber((prev: number) => (prev <= 0 ? 0 : prev - 1))
              }
            >
              remove
            </span>
          </button>
          <p className="text-darkBlue font-bold">{cartNumber}</p>
          <button onClick={() => setCartNumber((prev: number) => prev + 1)}>
            <span className="material-icons-outlined cursor-pointer text-sm text-darkOrange font-bold">
              add
            </span>
          </button>
        </div>
        <button className="flex-grow rounded-md shadow-xl flex gap-2 justify-center items-center shadow-paleOrange px-4 py-3 text-sm font-bold text-white bg-darkOrange hover:opacity-70">
          <span className="material-icons-outlined text-sm">shopping_cart</span>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
