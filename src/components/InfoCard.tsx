import React from "react";

const InfoCard = (props: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="lg:px-16 justify-center items-center flex flex-col text-center ">
      <img src={props.icon} width={100} />
      <p className="text-purple-600 text-2xl text-center font-bold mt-2">
        {props.title}
      </p>
      <p className="text-white text-center">{props.desc}</p>
    </div>
  );
};

export default InfoCard;
