import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:mt-8">
      <section className="flex flex-col items-center justify-center lg:flex-row gap-y-10 py-6 px-12 ">
        {/* Left Side */}
        <div className=" mt-16 flex-1">
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
          <div className="mt-8 flex  space-x-8">
            <a
              className="flex px-2 h-16 text-xl font-bold  text-white w-40 rounded-full bg-blue-600 hover:bg-white hover:duration-700  hover:text-blue-600 justify-center items-center cursor-pointer"
              href={"/"}
            >
              Explore
            </a>
            <a
              className="flex px-2 h-16 text-xl font-bold border-2 border-white text-white hover:bg-purple-600 hover:duration-700 w-40 rounded-full justify-center items-center cursor-pointer"
              href={"/"}
            >
              Create
            </a>
          </div>
          <div className="flex space-x-8 mt-16 items-center">
            <div className="text-white flex space-x-3">
              <div>
                <h1 className="text-3xl font-bold">200K+</h1>
                <p className="text-center ">Collection</p>
              </div>
            </div>
            <div className="text-white flex space-x-3">
              <div>
                <h1 className="text-3xl font-bold">10k+</h1>
                <p className="text-center ">Artist</p>
              </div>
            </div>
            <div className="text-white flex space-x-3">
              <div>
                <h1 className="text-3xl font-bold">423K+</h1>
                <p className="text-center ">Community</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 h-full w-full blur-3xl z-[-99]"></div>
          <div className="lg:w-[800px] flex flex-1 items-center justify-center">
            <div className="flex border-4 border-purple-600 rounded-2xl">
              <img
              className="rounded-xl"
                src="https://i.seadn.io/gcs/files/3b814f7eb68a7db1df38408de1c77f4f.gif?auto=format&dpr=1&w=256"
                width="600"
                height="600"
                alt="nft"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
