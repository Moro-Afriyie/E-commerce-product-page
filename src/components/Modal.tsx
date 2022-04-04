import * as React from "react";
import Carousel from "./Carousel";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto  z-50 flex items-center justify-center h-full w-full"
      id="my-modal"
    >
      <Carousel />
    </div>
  );
};

export default Modal;
