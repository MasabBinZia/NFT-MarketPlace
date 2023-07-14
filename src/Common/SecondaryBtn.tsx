import React from "react";

const SecondaryBtn = (props:{btnText:string,}) => {
  return (
    <>
      {" "}
      <a
        className="flex px-2 h-16 text-xl font-bold border-2 border-white text-white hover:bg-purple-600 hover:duration-700 w-40 rounded-full justify-center items-center cursor-pointer"
        href={"/"}
      >
       {props.btnText}
      </a>
    </>
  );
};

export default SecondaryBtn;
