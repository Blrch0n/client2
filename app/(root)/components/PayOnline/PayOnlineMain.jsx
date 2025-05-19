"use client";
import Link from "next/link";
import ProductDetail from "./ProductDetail";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useEffect, useState } from "react";
import Filters from "./Filters";
import OrderPayment from "./OrderPayment";
import ProductModel from "./ProductModel";
import getRequest from "@/utils/getRequest";

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

const PayOnlineMain = ({merchantid , tableid}) => {
  const [clickedCategory, setIsCategoryOpen] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [datas , setDatas] = useState([]);
  const [subdatas, setSubdatas] = useState([]);
  const [slider , setSlider] = useState([])
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading){
      Promise.all([
      getRequest({route: `product?user=${merchantid}` , setValue: setDatas}),
      getRequest({route: `subcategory?user=${merchantid}` , setValue: setSubdatas}),
      getRequest({route: `slider?user=${merchantid}` , setValue: setSlider})
  ]).finally(() => setIsLoading(false))}
  },[isLoading])

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
              category={subdatas}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              clickedCategory={clickedCategory}
              setIsCategoryOpen={setIsCategoryOpen}
            />
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5">
              {datas
                .filter((item) => {
                  const matchesCategory =
                    clickedCategory === "" || item.subcategory  === clickedCategory;
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
          <OrderPayment merchantid={merchantid} tableid={tableid} />
        </div>
      </div>
    </section>
  );
};

export default PayOnlineMain;
