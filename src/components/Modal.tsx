import * as React from "react";
import { useDispatch } from "react-redux";
import { productImages } from "../models/ProductImages";
import { closeModal } from "../store/actionCreators/modal.action";
import Carousel from "./Carousel";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {}

const images = productImages;

const Modal: React.FunctionComponent<IModalProps> = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const dispatch = useDispatch();

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc: any, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "md:hidden absolute text-black text-2xl z-10 bg-white h-10 w-10 rounded-full  flex items-center justify-center";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      {isLeft ? (
        <span className="material-icons-outlined">chevron_left</span>
      ) : (
        <span className="material-icons-outlined">chevron_right</span>
      )}
    </button>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto  z-50 flex items-center justify-center h-full w-full"
      id="my-modal"
    >
      <div className="flex flex-col max-w-[30rem] items-center gap-4">
        <span
          className="material-icons-outlined ml-auto text-white"
          onClick={() => dispatch(closeModal())}
        >
          close
        </span>
        <div className="md:flex flex-col gap-5 items-center max-w-[25rem]">
          <div className="flex w-full h-64 sm:h-[25rem] md:rounded-xl md:overflow-hidden items-center cursor-pointer">
            <div className="relative h-full w-full">
              <div className="carousel">
                {sliderControl(true)}
                {images.map((img, i) => (
                  <div
                    className="w-full  flex-shrink-0"
                    key={img}
                    ref={refs[i]}
                  >
                    <img src={img} className="w-full h-full object-fill" />
                  </div>
                ))}
                {sliderControl(false)}
              </div>
            </div>
          </div>
          <div className="hidden controls max-w-[21rem] md:flex justify-center gap-6  h-16">
            {images.map((img, i) => (
              <div
                className={`w-full rounded-lg relative  cursor-pointer overflow-hidden hover:opacity-60 ${
                  i === currentImage ? "border-2 border-darkOrange" : ""
                }`}
                key={img}
                onClick={() => scrollToImage(i)}
              >
                {i === currentImage && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 z-30 bg-white opacity-70"></div>
                )}
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
