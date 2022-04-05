import * as React from "react";
import Carousel from "./Carousel";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {}

const Modal: React.FunctionComponent<IModalProps> = () => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto  z-50 flex items-center justify-center h-full w-full"
      id="my-modal"
    >
      <div className="flex flex-col max-w-[30rem] items-center gap-4">
        <span className="material-icons-outlined ml-auto text-white">
          close
        </span>
        <Carousel />
      </div>
    </div>
  );
};

export default Modal;
