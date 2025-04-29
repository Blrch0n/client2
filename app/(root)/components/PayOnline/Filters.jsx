import React from "react";
const Filters = ({ category, setIsCategoryOpen }) => {
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setIsCategoryOpen(selectedValue);
    console.log(selectedValue);
  };

  return (
    <div
      className="w-full h-fit text-[#333] flex flex-col bg-white gap-4 px-8 py-8 border border-[#ccc] rounded-[10px]"
      style={{ boxShadow: "0 2px 2px 0 rgb(9 30 66 / 13%)" }}
    >
      <div className="w-full h-fit flex flex-row items-end justify-between">
        <h1 className="text-[16px] font-bold">Filters</h1>
        <button className="text-[#f25c04] hover:underline text-[11px] font-medium">
          Reset Filters
        </button>
      </div>

      <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-center justify-between">
        <select
          name="category"
          id="categorySelect"
          className="border h-full w-full px-4 py-2 border-[#333] rounded-[5px]"
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="search"
          className="border h-full px-4 py-2 w-full border-[#333] rounded-[5px]"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Filters;
