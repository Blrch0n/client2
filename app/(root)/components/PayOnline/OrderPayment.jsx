import React from "react";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";

const OrderPayment = () => {
  const {
    items,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllFromCart,
  } = useCart();
  return (
    <div className="w-full lg:w-[30%] h-fit rounded-[10px] overflow-hidden text-[#333] bg-white">
      <div className="w-full h-fit px-[30px] py-5 bg-[#121921] text-white font-medium">
        <h1>Төлбөрийн мэдээлэл</h1>
      </div>
      <div className="p-[30px] w-full h-fit flex gap-2.5 flex-col">
        {items && items.length > 0 ? (
          items.map((data, index) => (
            <div
              key={index}
              className="w-full h-fit text-[#333] flex flex-row gap-2"
            >
              <img
                src={data.img}
                alt={data.title}
                className="w-[100px] h-auto rounded-[10px]"
              />
              <div className="w-full text-[13px] font-semibold h-fit flex flex-col">
                <h1>{data.title}</h1>
                <p className="font-medium">{data.description}</p>
              </div>
              <div>
                <p className="font-bold">${data.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-fit text-[#333] flex flex-row gap-2">
            <img
              src="https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg"
              alt="image"
              className="w-[100px] h-auto rounded-[10px]"
            />

            <div className="w-full text-[13px] font-semibold h-fit flex flex-col">
              <h1>Таны сагс хоосон байна</h1>
            </div>
            <div>
              <p className="font-bold">${0}</p>
            </div>
          </div>
        )}
        <hr />
        <div className="w-full h-fit flex flex-col gap-4">
          <div className="w-full h-fit flex flex-row justify-between">
            <h2 className="font-bold">Нийт төлөх дүн</h2>
            <p className="font-bold">${totalPrice || 0}</p>
          </div>
          <button
            className="w-full h-fit rounded-[10px] text-white font-semibold py-3 bg-[#f25c04]"
            onClick={() => {
              toast.success("Амжилттай захиалсан.");
              removeAllFromCart();
            }}
          >
            Захиалга өгөх
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
