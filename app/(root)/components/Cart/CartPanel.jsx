// components/CartPanel.jsx
import React from "react";
import { FiX } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import postRawRequest from "@/utils/PostRawRequest";

export default function CartPanel({ open, onClose , merchantid ,tableid}) {
  const {
    items,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    removeAllFromCart,
  } = useCart();

  const handleCheckout = async () => {
    if (!items || items.length === 0) {
      toast.error("Сагс хоосон байна.");
      return;
    }

    const productsToSend = items.map((item) => ({
      product: item.id || item._id,
      price: item.price,
      total: item.quantity,
    }));
    const response = await postRawRequest({
      route: 'order',
      body: {
        products: productsToSend,
        totalPrice,
        merchantId: merchantid,
        tableId: tableid,
        isPaid: false,
      },
    });
    
    if (response?.data?.success) {
      toast.success("Захиалга амжилттай хийгдлээ.");
      removeAllFromCart();
    } else {
      toast.error("Захиалга хийхэд алдаа гарлаа.");
      console.log("Алдаа дэлгэрэнгүй:", response?.data || response);
    }
    
  };

  return (
    <div
      className={`fixed inset-0 z-50 text-[#333333] transition-opacity duration-300 
                  ${
                    open
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className={`fixed inset-y-0 right-0 text-black w-full lg:w-[80vw] bg-white h-full p-4 overflow-y-auto 
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        <h2 className=" font-semibold text-[#ff4301] text-2xl mb-4">
          Таны сагс
        </h2>

        <div className="flex flex-col gap-4 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length === 0 ? (
            <p className="text-[#888]">Таны сагс хоосон байна.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex flex-col gap-5 items-start mb-3">
                <div className="w-full flex gap-4 items-start justify-between">
                  <img
                    src={i.img}
                    alt={i.title}
                    className="w-20 h-12 rounded mr-2 object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-[13px]">{i.title}</p>
                  </div>
                  <button
                    className="text-red-500"
                    onClick={() => {
                      removeFromCart(i.id);
                      toast.success(`${i.title} сагснаас хаслаа.`);
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="w-fit flex text-[14px] text-[#ff4301] font-semibold items-center gap-4 justify-between">
                  <span className="w-20 font-normal text-[#888] mr-2">
                    Үнийн дүн
                  </span>{" "}
                  {new Intl.NumberFormat("mn-MN").format(i.price)}₮
                </div>
                <div className="w-fit flex text-[14px] items-center font-semibold gap-4 justify-between">
                  <span className="w-20 font-normal text-[#888] mr-2">
                    Тоо ширхэг
                  </span>
                  <div className="flex items-center w-fit gap-4">
                    <button
                      onClick={() => {
                        if (i.quantity === 1) {
                          removeFromCart(i.id);
                          toast.success(`${i.title} сагснаас хаслаа.`);
                        } else {
                          decreaseQuantity(i.id);
                          toast.success(`${i.title} нэг ширхэг хасагдлаа.`);
                        }
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#ff4301] text-white"
                    >
                      -
                    </button>
                    {i.quantity}
                    <button
                      onClick={() => {
                        increaseQuantity(i.id);
                        toast.success(`${i.title} нэг ширхэг нэмэгдлээ.`);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#ff4301] text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex w-full h-fit flex-col gap-4 mt-2.5 px-[15px] border border-[#888] rounded-[5px] py-2.5">
          {items.length > 0 && (
            <div className="flex w-full flex-col items-end gap-2.5 pt-2">
              {items.map((i) => (
                <div
                  key={i.id}
                  className="flex text-[#888] text-[13px] font-medium w-full justify-between mb-2"
                >
                  <span>{i.title}</span>
                  <span>{new Intl.NumberFormat("mn-MN").format(i.price)}₮</span>
                </div>
              ))}
              <div className="flex w-full text-[#333] font-semibold justify-between mb-2">
                <p>Нийт төлөх дүн</p>
                <p>{new Intl.NumberFormat("mn-MN").format(totalPrice)}₮</p>
              </div>
              <button
                className="bg-[#ff4301] text-white py-[7px] text-[12px] px-[15px] rounded-full"
                onClick={() => {
                  onClose()
                  removeAllFromCart();
                  handleCheckout();
                }}
              >
                Захиалга өгөх
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
