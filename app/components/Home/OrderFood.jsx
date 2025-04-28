import { IoWalletOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";

const OrderFood = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-white">
      <div>
        <div>
          <span></span>
        </div>
        <div>
          <h1>Order Food</h1>
          <p>Choosing one of the payment methods</p>
        </div>
        <div className="w-full h-[225px] flex justify-center flex-col items-center gap-4   text-2xl">
          <CiCreditCard1 />
          <h1>Pay Online</h1>
          <p>and wait for delivery</p>
        </div>
        <div className="w-full h-[225px] flex justify-center flex-col items-center gap-4   text-2xl">
          <IoWalletOutline />
          <h1>Pay with cash</h1>
          <p>when food is arrived to you</p>
        </div>
        <div
          className="w-full h-[225px] flex bg-center bg-cover bg-no-repeat justify-center flex-col items-center gap-4  text-2xl"
          style={{
            backgroundImage:
              "url('https://ultimatewebsolutions.net/foodboard/img/bg/bg-banner.jpg')",
          }}
        >
          <CiCreditCard1 />
          <h1>Pay Online</h1>
          <p>and wait for delivery</p>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
