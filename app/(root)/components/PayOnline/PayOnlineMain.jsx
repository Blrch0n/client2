"use client";
import Link from "next/link";
import ProductDetail from "./ProductDetail";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

const category = ["Starters", "MainDishes", "Desserts"];
const contactData = [
  {
    icon: <IoLocationSharp color="#f25c04" />,
    title: "Address",
  },
  {
    icon: <FaPhoneAlt color="#f25c04" />,
    title: "Phone",
  },
  {
    icon: <IoMail color="#f25c04" />,
    title: "Email",
  },
];
const foodData = [
  {
    id: 1,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "MainDishes",
  },
  {
    id: 2,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "MainDishes",
  },
  {
    id: 3,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "MainDishes",
  },
  {
    id: 4,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "Desserts",
  },
  {
    id: 5,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "Starters",
  },
];

const PayOnlineMain = () => {
  const [clickedCategory, setIsCategoryOpen] = useState("");
  return (
    <section className="w-full h-fit flex items-center flex-col bg-white">
      <div
        className=" w-full h-[450px] bg-cover bg-no-repeat bg-center bg-[#f25c04] relative"
        style={{
          backgroundImage:
            "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div className="relative inset-0 px-4 w-full h-full flex flex-col justify-center items-start z-20 gap-[30px] text-white text-center">
          <h1 className="text-[48px] lg:text-[60px] font-bold">FOODBOARD</h1>
          <p className="text-[16px] lg:text-[21px]">
            Food order wizard with online payment.
          </p>
          <div className="flex flex-row gap-5 w-fit h-fit">
            {contactData.map((item, index) => (
              <Link href="" key={index}>
                <div className="flex items-center justify-center gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] w-full h-fit flex bg-white flex-col">
        <div className="w-full py-4 flex flex-row justify-start gap-5">
          {category.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 border rounded-full"
              onClick={() => setIsCategoryOpen(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full h-fit flex flex-col lg:flex-row gap-5">
          <div className="w-[70%] h-fit flex flex-col gap-5">
            {category.map((catName, idx) => (
              <div key={idx} className="w-full h-fit flex flex-col gap-5">
                <h1 className="uppercase font-bold">{catName}</h1>
                <div className="w-full h-fit grid grid-cols-2 gap-5">
                  {foodData
                    .filter((foodItem) => foodItem.category === catName)
                    .map((foodItem, idx2) => (
                      <ProductDetail key={idx2} item={foodItem} />
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[30%] h-[400px] bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default PayOnlineMain;
