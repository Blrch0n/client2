const Filters = ({
  category,
  subcategory,
  searchValue,
  setSearchValue,
  clickedCategory,
  clickedSubCategory,
  setIsCategoryOpen,
  setIsSubCategoryOpen,
}) => {
  const handleCategoryChange = (e) => {
    console.log("Category changed:", e.target.value);
    const categoryId = e.target.value;
    setIsCategoryOpen(categoryId);
    setIsSubCategoryOpen("");
  };

  const handleSubcategoryChange = (e) => {
    console.log("Subcategory changed:", e.target.value);
    const subcategoryId = e.target.value;
    setIsSubCategoryOpen(subcategoryId);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetValue = () => {
    setIsCategoryOpen("");
    setIsSubCategoryOpen("");
    setSearchValue("");
  };

  return (
    <div
      className="w-full h-fit text-[#333] flex flex-col bg-white gap-4 px-8 py-8 border border-[#ccc] rounded-[10px]"
      style={{ boxShadow: "0 2px 2px 0 rgb(9 30 66 / 13%)" }}
    >
      <div className="w-full h-fit flex flex-col sm:flex-row gap-4 items-start justify-between">
        <h1 className="text-[16px] font-bold">Ангилал:</h1>
        <select
          name="category"
          id="categorySelect"
          className="border h-full w-full px-4 py-2 border-[#333] rounded-[5px]"
          onChange={handleCategoryChange}
          value={clickedCategory}
        >
          <option value="">Хоолны төрөлөө сонгоно уу</option>
          {category.map((item, index) => (
            <option key={index} value={item._id}>
              {item.title}
            </option>
          ))}
        </select>

        {clickedCategory !== "" && (
          <>
            <h1 className="text-[16px] font-bold">Дэд ангилал:</h1>
            <select
              name="subcategory"
              id="subcategorySelect"
              className="border h-full w-full px-4 py-2 border-[#333] rounded-[5px]"
              onChange={handleSubcategoryChange}
              value={clickedSubCategory}
            >
              <option value="">Хоолны төрөлөө сонгоно уу</option>
              {subcategory.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
          </>
        )}
        <div className="w-full h-fit flex flex-row items-end justify-between">
          <h1 className="text-[16px] font-bold">Хайлт</h1>
          <button
            className="text-[#f25c04] hover:underline text-[11px] font-medium"
            onClick={resetValue}
          >
            Хайлтыг дахин ачаалуулах
          </button>
        </div>
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
