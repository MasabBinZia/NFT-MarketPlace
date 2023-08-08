import { InfoData } from "@/Data/InfoData";
import React from "react";
import InfoCard from "./InfoCard";

const InfoSec = () => {
  return (
    <section className="mt-8 px-2 ">
      <div className="border-2 border-purple-600 h-full rounded-3xl  py-8 flex flex-col justify-center items-center ">
        <h2 className="text-3xl text-center uppercase py-6 eading-normal font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          Get your Now by following process
        </h2>
        <div className="text-white px-4 space-y-12  md:flex-col md:space-y-12  lg:flex-row lg:flex py-6">
          {InfoData.map((infoitem) => (
            <InfoCard
              key={infoitem.id}
              icon={infoitem.icon}
              id={infoitem.id}
              title={infoitem.title}
              desc={infoitem.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSec;
