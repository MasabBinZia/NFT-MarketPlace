import Image from "next/image";
import React from "react";
import { BrandsData } from "@/Data/BrandsData";

const Brands = () => {
  return (
    <>
      <section className="lg:py-24 mt-24">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h2 className="text-3xl text-center uppercase py-6 eading-normal font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Trusted by top-tier product companies
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            {BrandsData.map((data) => (
              <div key={data.id} className="flex items-center justify-center">
                <Image
                  src={data.img}
                  alt={data.name}
                  className="block object-contain h-16 greyC"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
