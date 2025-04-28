import React from "react";

const Button = ({ title, padding, isRounded }) => {
  return (
    <button
      className="rounded-[5px] duration-200 ease-in-out cursor-pointer text-[14px] hover:text-white hover:bg-[#f25c04] p-6 bg-white font-medium text-[#f25c04]"
      style={{
        boxShadow: "0px 0px 0px 7px rgb(255 255 255 / 20%)",
        padding: `${padding}`,
        borderRadius: isRounded && "100%",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
