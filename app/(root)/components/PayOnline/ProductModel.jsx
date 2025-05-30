import apiData from "@/utils/apiData";
import { useEffect, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";

const ANIMATION_DURATION = 500;

const ProductModel = ({ item, isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen && item) {
      setShow(true);
    } else if (show) {
      const timeout = setTimeout(() => setShow(false), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, item]);

  if (!show || !item) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-[#00000090] px-[20px] items-center justify-center transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      <div
        className={`relative max-w-[500px] text-[#333] w-full bg-white rounded-lg z-10 flex flex-col transform transition-all duration-500 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center  p-4 border-b border-[#ccc]">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <button onClick={onClose} className="text-lg font-bold">
            <LiaTimesSolid
              size={25}
              className="hover:text-[#f25c04] cursor-pointer duration-100 ease-in"
            />
          </button>
        </div>
        <div className="flex p-4 flex-col items-center">
          <img
            src={apiData.file_api_url + item.cover}
            alt="model-image"
            className="mb-4 w-full h-auto rounded-[4px] object-contain"
          />
          <div className="w-full h-fit flex flex-col gap-6 pb-5">
            <h2 className="font-semibold">Хоолны найрлага</h2>
            <p className="text-[14px]">{item.description}</p>
          </div>
        </div>
        <div className="w-full h-fit p-4 bg-[#f8f8f8] border-t border-[#ccc]">
          <button
            className="text-[#333] px-[60px] w-full cursor-pointer rounded-[4px] py-2 hover:border-[#f25c04] duration-100 ease-in hover:text-[#f25c04] border-[2px]"
            onClick={onClose}
          >
            Хаах
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
