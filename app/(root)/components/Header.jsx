"use client";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import CartPanel from "./Cart/CartPanel";
import { useCart } from "./Cart/CartContext";

const Header = () => {
  const { totalCount } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between  fixed top-0 w-full z-49 items-center bg-white p-2.5 shadow-md">
      <div className="w-fit h-fit flex items-center gap-4">
        <img
          src="https://ultimatewebsolutions.net/foodboard/img/logo.svg"
          alt="image"
        />
      </div>
      <div className="flex gap-4 text-2xl items-center font-semibold text-black">
        <button onClick={() => setOpen((o) => !o)} className="relative">
          <FaCartShopping size={24} color="#f25c04" />
          {totalCount > 0 && (
            <span
              className="absolute -top-1 font-bold -right-1 bg-white text-red-600 
                             rounded-full text-xs w-4 h-4 flex items-center justify-center"
            >
              {totalCount}
            </span>
          )}
        </button>
      </div>
      <CartPanel open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
