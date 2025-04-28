import Filters from "./Filters";
import ProductDetail from "./ProductDetail";
const foodData = [
  {
    id: 1,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "",
  },
  {
    id: 2,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "",
  },
  {
    id: 3,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "",
  },
  {
    id: 4,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "",
  },
  {
    id: 5,
    img: "https://ultimatewebsolutions.net/foodboard/img/gallery/grid-items/01.jpg",
    title: "Aspen",
    description: "Bacon,Onion,Mushroom",
    size: "M",
    price: 8,
    category: "",
  },
];

const PayOnlineMain = () => {
  return (
    <section className="w-full h-fit flex flex-col bg-white">
      <div className="w-full h-fit py-4 bg-[#121921]">
        <h1>Pay onlines</h1>
      </div>
      <div className="w-full h-fit flex bg-white flex-col">
        <Filters />
        <div>
          {foodData.map((item, index) => (
            <ProductDetail key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayOnlineMain;
