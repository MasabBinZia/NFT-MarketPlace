import PrimaryBtn from "@/Common/PrimaryBtn";
import SecondaryBtn from "@/Common/SecondaryBtn";
import InfoStat from "@/Common/InfoStat";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-8">
      <section className="flex flex-col items-center justify-center lg:flex-row gap-y-10 py-6 px-12 ">
        {/* Left Side */}
        <div className=" mt-16 flex-1">
          {/* <h1 className=" mt-6 scroll-m-20 text-4xl from-sky-200 via-purple-600 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent font-extrabold tracking-tight lg:text-5xl">
                Discover Collect, & Sell Extraordinary NFTs.
            </h1> */}
          <h1 className="scroll-m-20 text-4xl font-extrabold text-white tracking-tight lg:text-5xl">
            Discover Collect, & Sell{" "}
            <span className="from-sky-200 via-purple-600 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent">
              Extraordinary{" "}
            </span>{" "}
            NFTs.
          </h1>

          <p className="leading-7 text-white [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquid nobis mollitia alias laudantium modi.
          </p>
          <div className="mt-8 flex space-x-8">
            <PrimaryBtn btnText="Explore" />
            <SecondaryBtn btnText="Create" />
          </div>
          <div className="flex space-x-8 mt-16 items-center">
          <InfoStat count={200} title="Collection" />
          <InfoStat count={10} title="Artist" />
          <InfoStat count={423} title="Community" />
          </div>
        </div>
        {/* Right Side */}
        <div className="w-[800px] flex flex-1 items-center justify-center">
          <div className="flex">
          <img src={"https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&dpr=1&w=256"} width={600} height={600} alt="nft" />            
          </div>
        </div>
       {/* 58:39 */}
      </section> 
      
     
    </div>
  );
};

export default Hero;
