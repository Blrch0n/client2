import { IoReorderThreeOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white p-2.5 shadow-md">
      <IoReorderThreeOutline />
      <div>
        <img
          src="https://ultimatewebsolutions.net/foodboard/img/logo.svg"
          alt="image"
        />
      </div>
      <div className="flex gap-4 text-2xl text-black">
        <MdSupportAgent />
        <FaCartShopping />
      </div>
    </header>
  );
};

export default Header;
