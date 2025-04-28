import { IoWalletOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import Button from "../ui/Button";
import { LuMouse } from "react-icons/lu";
import Span from "../ui/Span";

const OrderFood = () => {
  const iconSize = 24;
  const cardicons = 56;

  return (
    <div className="bg-[#f8f8f8] relative flex flex-col text-[#333] w-full h-fit px-4 pt-8 pb-[60px]">
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
        <Button title={<LuMouse size={iconSize} />} isRounded />
      </div>

      <div className="space-y-8 mt-2">
        <Span />
        <div className="text-start">
          <h1 className="text-[26px] font-bold">Order Food</h1>
          <p className="text-gray-600 text-[18px]">
            Choose one of the payment methods
          </p>
        </div>

        <div className="w-full h-fit flex gap-8 flex-col lg:flex-row">
          <div className="w-full border transition-all duration-500 active:-translate-y-2  hover:translate-y-[-8px] rounded-[5px] border-[#ccc] flex flex-col bg-white px-8 py-16 items-center justify-center gap-4 text-2xl">
            <CiCreditCard1 size={cardicons} color="#f25c04" />
            <div className="w-full h-fit flex flex-col text-center">
              <h1 className="text-[18px] font-medium">Pay Online</h1>
              <p className="text-[14px] font-normal">and wait for delivery</p>
            </div>
          </div>

          <div className="w-full border transition-all duration-500 active:-translate-y-2  hover:translate-[-8px] rounded-[5px] border-[#ccc] flex flex-col bg-white px-8 py-16 items-center justify-center gap-4 text-2xl">
            <IoWalletOutline size={cardicons} color="#f25c04" />
            <div className="w-full h-fit flex flex-col text-center">
              <h1 className="text-[18px] font-medium">Pay with cash</h1>
              <p className="text-[14px] font-normal">
                when food arrives to you
              </p>
            </div>
          </div>
        </div>

        <div
          className="w-full h-fit overflow-hidden p-[90px] flex relative rounded-[5px] items-center text-center md:text-wrap md:items-start flex-col text-white justify-center gap-4 text-2xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg-banner.jpg')",
          }}
        >
          {/* overlay, pushed behind with z-negative */}
          <span className="absolute inset-0 bg-[#00000030] z-[0]"></span>

          {/* content wrapper, raised above overlay */}
          <div className="relative z-10 flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-[26px] font-bold">FoodBoard</h1>
            <p className="text-[21px] font-medium">
              Food order wizard with online payment.
            </p>
            <Button title={"FAQ"} padding={"7px 21px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
