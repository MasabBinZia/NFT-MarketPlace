import React from "react";
import Image, { StaticImageData } from "next/image";

const InfoCard = (props: {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
}) => {
  return (
    <div className="lg:px-16 justify-center items-center flex flex-col text-center ">
      <Image src={props.icon} alt={"ada"} width={250} height={250} />
      <p className="text-purple-600 text-2xl text-center font-bold mt-2">
        {props.title}
      </p>
      <p className="text-white text-center">{props.desc}</p>
    </div>
  );
};

export default InfoCard;
