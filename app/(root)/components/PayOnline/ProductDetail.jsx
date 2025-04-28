import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
const ProductDetail = ({ item }) => {
  return (
    <div>
      <div
        className="w-full h-[190px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>
      <div>
        <div>
          <IoReorderThreeOutline />
          <p>Options</p>
          <LuWallet />
          <p>${item.price}</p>
        </div>
        <IoCartOutline />
      </div>
    </div>
  );
};

export default ProductDetail;
