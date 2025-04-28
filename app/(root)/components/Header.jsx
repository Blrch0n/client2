"use client";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import SiderBar from "./ui/SiderBar";
import { useState } from "react";

const contactData = ["Home", "Order", "Faq", "Contacts"];

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <header className="flex justify-between items-center bg-white p-2.5 shadow-md">
      <SiderBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="w-fit h-fit flex items-center gap-4">
        <div className="flex lg:hidden" onClick={() => setIsSideBarOpen(true)}>
          <IoReorderThreeOutline size={30} />
        </div>
        <img
          src="https://ultimatewebsolutions.net/foodboard/img/logo.svg"
          alt="image"
        />
      </div>
      <div className="flex gap-4 text-2xl items-center font-semibold text-black">
        <div className="hidden flex-row gap-4 lg:flex">
          {contactData.map((item, index) => (
            <p key={index} className="text-[14px] text-[#333]">
              {item}
            </p>
          ))}
        </div>
        <MdSupportAgent color="#f25c04" />
        <FaCartShopping color="#f25c04" />
      </div>
    </header>
  );
};

export default Header;
