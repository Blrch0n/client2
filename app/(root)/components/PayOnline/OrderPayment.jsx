import React from "react";

const OrderPayment = () => {
  return (
    <div className="w-full lg:w-[30%] h-fit rounded-[10px] overflow-hidden text-[#333] bg-white">
      <div className="w-full h-fit px-[30px] py-5 bg-[#121921] text-white font-medium">
        <h1>Order Payment</h1>
      </div>
      <div className="p-[30px] w-full h-fit flex gap-2.5 flex-col">
        <div className="w-full h-fit text-[#333] flex flex-row gap-2">
          <img
            src="https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg"
            alt="image"
            className="w-[100px] h-auto rounded-[10px]"
          />

          <div className="w-full text-[13px] font-semibold h-fit flex flex-col">
            <h1>Your cart is empty</h1>
            <p className="font-medium">Start adding items</p>
          </div>
          <div>
            <p>${0}</p>
          </div>
        </div>
        <hr />
        <div className="w-full h-fit flex flex-col gap-4">
          <div className="w-full h-fit flex flex-row justify-between">
            <h2 className="font-bold">Total</h2>
            <p className="font-bold">${0}</p>
          </div>
          <button className="w-full h-fit rounded-[10px] text-white font-semibold py-3 bg-[#f25c04]">
            Continue Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
