import React from "react";
import { useCart } from "../Cart/CartContext";
import toast from "react-hot-toast";
import { IoTrash } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import postRawRequest from "@/utils/PostRawRequest";

const OrderPayment = ({ merchantid, tableid }) => {
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
    <div className="w-full lg:w-[30%] h-fit rounded-[10px] overflow-hidden text-[#333] bg-white">
      <div className="w-full px-[30px] py-5 bg-[#121921] text-white font-medium">
        <h1>Төлбөрийн мэдээлэл</h1>
      </div>
      <div className="p-[30px] flex flex-col gap-2.5">
        {items && items.length > 0 ? (
          items.map((data, index) => (
            <div key={index} className="flex gap-2 text-[#333]">
              <img src={data.img} alt={data.title} className="w-[100px] rounded-[10px]" />
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between">
                  <div className="text-[13px] font-semibold">
                    <h1>{data.title}</h1>
                    <p className="font-medium">
                      {data.description.length > 10 ? `${data.description.slice(0, 10)}...` : data.description}
                    </p>
                  </div>
                  <p className="font-bold">
                    {new Intl.NumberFormat("en-US").format(data.price || 0)}₮
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center border border-[#ccc] rounded-[5px] px-[10px]">
                    <FaMinus
                      onClick={() => {
                        decreaseQuantity(data.id);
                        toast.success(`${data.title} нэг ширхэг хасагдлаа.`);
                      }}
                      className="cursor-pointer"
                    />
                    <span className="w-[20px] text-center">{data.quantity}</span>
                    <FaPlus
                      onClick={() => {
                        increaseQuantity(data.id);
                        toast.success(`${data.title} нэг ширхэг нэмэгдлээ.`);
                      }}
                      className="cursor-pointer"
                    />
                  </div>
                  <IoTrash
                    size={20}
                    color="#f25c04"
                    onClick={() => {
                      removeFromCart(data.id);
                      toast.success(`${data.title} сагснаас хасагдлаа.`);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex gap-2 text-[#333]">
            <img
              src="https://ultimatewebsolutions.net/foodboard/img/bg/empty-cart-small.jpg"
              alt="empty"
              className="w-[100px] rounded-[10px]"
            />
            <div className="text-[13px] font-semibold">
              <h1>Таны сагс хоосон байна</h1>
            </div>
          </div>
        )}
        <hr className="text-[#ccc]" />
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h2 className="font-bold">Нийт төлөх дүн</h2>
            <p className="font-bold">
              {new Intl.NumberFormat("en-US").format(totalPrice || 0)}₮
            </p>
          </div>
          <button
            className="w-full rounded-[10px] text-white font-semibold py-3 bg-[#f25c04]"
            onClick={handleCheckout}
          >
            Захиалга өгөх
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
