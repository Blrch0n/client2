import { useState } from "react";

const Filters = ({
  category,
  searchValue,
  setSearchValue,
  clickedCategory,
  setIsCategoryOpen,
}) => {
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setIsCategoryOpen(selectedValue);
    console.log(selectedValue);
  };
  {
    foodData
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
      ));
  }
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetValue = () => {
    setIsCategoryOpen("");
    setSearchValue("");
  };

  return (
    <div
      className="w-full h-fit text-[#333] flex flex-col bg-white gap-4 px-8 py-8 border border-[#ccc] rounded-[10px]"
      style={{ boxShadow: "0 2px 2px 0 rgb(9 30 66 / 13%)" }}
    >
      <div className="w-full h-fit flex flex-row items-end justify-between">
        <h1 className="text-[16px] font-bold">Хайлт</h1>
        <button
          className="text-[#f25c04] hover:underline text-[11px] font-medium"
          onClick={resetValue}
        >
          Хайлтыг дахин ачаалуулах
        </button>
      </div>

      <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-center justify-between">
        <select
          name="category"
          id="categorySelect"
          className="border h-full w-full px-4 py-2 border-[#333] rounded-[5px]"
          onChange={handleCategoryChange}
          value={clickedCategory}
        >
          <option value="">Хоолны төрөлөө сонгоно уу.</option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="search"
          className="border h-full px-4 py-2 w-full border-[#333] rounded-[5px]"
          placeholder="Хайх..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Filters;
