import { InfoData } from "@/Data/InfoData";
import React from "react";
import InfoCard from "./InfoCard";

const InfoSec = () => {
  return (
    <section className="mt-8">
      <div className="border-2 border-purple-600 h-full rounded-3xl py-8 ">
        <h1 className="text-white text-center text-3xl font-bold ">
          Trending NFTs
        </h1>
        <div className="text-white space-y-12  md:flex-col md:space-y-12  lg:flex-row lg:flex py-6">
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
