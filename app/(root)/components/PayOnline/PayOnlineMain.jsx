"use client";
import Link from "next/link";
import ProductDetail from "./ProductDetail";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import Filters from "./Filters";
import OrderPayment from "./OrderPayment";
import ProductModel from "./ProductModel";

const category = ["Starters", "MainDishes", "Desserts"];
const contactData = [
  {
    icon: <IoLocationSharp color="#f25c04" />,
    title: "Хаяг",
  },
  {
    icon: <FaPhoneAlt color="#f25c04" />,
    title: "Утас",
  },
  {
    icon: <IoMail color="#f25c04" />,
    title: "И-мэйл",
  },
];
const foodData = [
  {
    id: 1,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "MainDishes",
  },
  {
    id: 2,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/02.jpg",
    title: "Bolognese",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "MainDishes",
  },
  {
    id: 3,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/03.jpg",
    title: "Castello",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "MainDishes",
  },
  {
    id: 4,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/04.jpg",
    title: "Fitness",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "Desserts",
  },
  {
    id: 5,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/05.jpg",
    title: "Caesar Salad",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "Starters",
  },
  {
    id: 6,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/06.jpg",
    title: "Greek Salad",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "Starters",
  },
  {
    id: 7,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/07.jpg",
    title: "Grilled Salad",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 10000,
    category: "Starters",
  },
  {
    id: 8,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/08.jpg",
    title: "Sushi",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 11000,
    category: "Starters",
  },
  {
    id: 9,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/09.jpg",
    title: "Beef Burger",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 11000,
    category: "Starters",
  },
  {
    id: 10,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/10.jpg",
    title: "Big Beef Burger",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 11000,
    category: "Starters",
  },
  {
    id: 11,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/11.jpg",
    title: "Chicken Burger",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 11000,
    category: "Starters",
  },
  {
    id: 12,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/12.jpg",
    title: "Mexican Burger",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 11000,
    category: "Starters",
  },
];

const PayOnlineMain = () => {
  const [clickedCategory, setIsCategoryOpen] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <section className="w-full h-fit flex items-center flex-col">
      <div
        className=" w-full h-[450px] bg-cover bg-no-repeat bg-center bg-[#f25c04] relative"
        style={{
          backgroundImage:
            "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
        <div className="relative inset-0 px-4 w-full h-full flex flex-col justify-center items-center md:items-start z-20 gap-[30px] text-white text-center">
          <h1 className="text-[48px] lg:text-[60px] font-bold">FOODBOARD</h1>
          <p className="text-[16px] font-mono lg:text-[21px]">
            Та өөрийн хүссэн бараагаа боломжийн үнээр аваарай.
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
      <div className="max-w-[1280px] w-full px-4 py-[60px] h-fit flex flex-col">
        <div className="w-full h-fit flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[70%] h-fit flex flex-col gap-5">
            <Filters
              category={category}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              clickedCategory={clickedCategory}
              setIsCategoryOpen={setIsCategoryOpen}
            />
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
              {foodData
                .filter((item) => {
                  const matchesCategory =
                    clickedCategory === "" || item.category === clickedCategory;
                  const matchesSearch = item.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                  return matchesCategory && matchesSearch;
                })
                .map((foodItem, idx2) => (
                  <ProductDetail
                    key={idx2}
                    item={foodItem}
                    onShowDetail={() => setSelectedProduct(foodItem)}
                  />
                ))}
            </div>
            <ProductModel
              item={selectedProduct}
              isOpen={!!selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          </div>
          <OrderPayment />
        </div>
      </div>
    </section>
  );
};

export default PayOnlineMain;
