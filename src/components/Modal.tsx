import * as React from "react";
import { useDispatch } from "react-redux";
import { productImages } from "../models/ProductImages";
import { closeModal } from "../store/actionCreators/modal.action";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {}

const images = productImages;

const Modal: React.FunctionComponent<IModalProps> = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const dispatch = useDispatch();
  const refs = images.reduce((acc: any, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = images.length;

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

  const arrowStyle =
    "absolute text-black text-2xl z-50 bg-white h-10 w-10 rounded-full  flex items-center justify-center";

  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`hover:text-darkOrange transition-colors ${arrowStyle} ${
        isLeft ? "-left-5 " : "-right-5"
      }`}
      style={{ top: "35%" }}
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
      <div className="w-full flex flex-col sm:max-w-[30rem] items-center gap-4">
        <span
          className="material-icons-outlined ml-auto text-darkOrange cursor-pointer"
          onClick={() => dispatch(closeModal())}
        >
          close
        </span>

        <div className="max-w-[17rem] border-3 flex relative flex-col gap-5 items-center sm:max-w-[25rem]">
          {sliderControl(true)}
          {sliderControl(false)}
          <div className="flex w-full h-64 sm:h-[25rem] rounded-xl overflow-hidden items-center cursor-pointer">
            <div className="relative h-full w-full">
              <div className="carousel">
                {images.map((img, i) => (
                  <div
                    className="w-full  flex-shrink-0"
                    key={img}
                    ref={refs[i]}
                  >
                    <img src={img} className="w-full h-full object-fill" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="controls w-full sm:max-w-[21rem] flex justify-center gap-3 sm:gap-6 h-16">
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
