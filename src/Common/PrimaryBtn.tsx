import React from "react";

const PrimaryBtn = (props:{btnText:string,}) => {
  return (
    <>
      {" "}
      <a
        className="flex px-2 h-16 text-xl font-bold  text-white w-40 rounded-full bg-blue-600 hover:bg-white hover:duration-700  hover:text-blue-600 justify-center items-center cursor-pointer"
        href={"/"}
      >
       {props.btnText}
      </a>
    </>
  );
};

export default PrimaryBtn;
