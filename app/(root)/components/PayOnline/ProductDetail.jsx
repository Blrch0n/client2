import { IoReorderThreeOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../Cart/CartContext";
import { toast } from "react-hot-toast";
const ProductDetail = ({ item, onShowDetail }) => {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    console.log(item);
    e.preventDefault();
    addToCart({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      size: item.size,
      price: item.price,
      img: item.img,
    });

    toast.success(`${item.title} нэмэгдлээ.`);
  };
  return (
    <div
      className="h-fit w-full flex rounded-[10px] overflow-hidden bg-white flex-col transition-transform duration-200 hover:scale-102"
      style={{ boxShadow: "0 2px 2px 0 rgb(9 30 66 / 13%)" }}
    >
      <div
        className="w-full h-[190px] bg-cover relative bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
        onClick={onShowDetail}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[] to-black opacity-60"></div>
        <div className="relative inset-0 w-full h-full p-4 flex flex-row justify-between items-end z-20 text-white text-center">
          <div className="w-full h-fit flex flex-col items-start font-medium">
            <h1 className="text-[16px] font-bold">{item.title}</h1>
            <p className="text-[13px]">{item.description}</p>
          </div>
          <span className="px-[10px] rounded-[2px] bg-[#f25c04]">
            Хэмжээ:{item.size}
          </span>
        </div>
      </div>
      <div
        className="w-full h-fit p-4 flex flex-row items-center justify-between"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <div className="w-full h-fit flex flex-row font-medium text-[#333] gap-2 items-center">
          <LuWallet size={20} />
          <p>{new Intl.NumberFormat("en-US").format(item.price || 0)}₮ </p>
        </div>
        <button onClick={handleAdd}>
          <IoCartOutline size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
