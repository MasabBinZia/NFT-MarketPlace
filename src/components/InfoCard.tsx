import { Wallet2 } from "lucide-react";
import React from "react";

const InfoCard = (props: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="lg:px-16 justify-center items-center flex flex-col text-center mr-6">
      <img src={props.icon} width={100} />
      <p className="text-purple-600 text-2xl font-bold mt-2">{props.title}</p>
      <p className="text-white">{props.desc}</p>
    </div>
  );
};

export default InfoCard;
