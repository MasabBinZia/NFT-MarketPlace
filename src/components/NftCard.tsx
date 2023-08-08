import Image, { StaticImageData } from "next/image";
import React from "react";

const TrendingCard = (props: {
  id: number;
  banner: StaticImageData;
  NFtName: string;
  ownerName: string;
  ownerPfp: StaticImageData;
  price: number;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="my-10 w-72 bg-black p-5 rounded-2xl border-4 border-purple-600 hover:scale-110 duration-300 cursor-pointer">
        <Image src={props.banner} className="rounded-2xl" alt="BAYC Ape" />
        <h2 className="text-md font-bold mt-3"></h2>
        <p className="text-white text-sm mb-2">{props.NFtName}</p>
        <div className="flex justify-between items-center text-sm">
          <p className="text-purple-400 flex  items-center justify-center font-bold">
            <img
              className="mr-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1396px-Ethereum_logo_translucent.svg.png"
              width={20}
            />{" "}
            {props.price} ETH
          </p>
          <p className="text-white px-2">{props.id} days left</p>
        </div>
        <div className="my-2 flex items-center">
          <Image
            src={props.ownerPfp}
            alt={props.ownerName}
            className="h-10 w-10 rounded-full  border border-white mr-2"
          />
          <p className="text-purple-400 text-[12px]">
            Owned by{" "}
            <a href="/" className="text-white font-bold">
              {props.ownerName}
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-4 items-center">
          <a
            className="flex px-2 h-12 text-sm font- border w-28  border-white bg-blue-600 text-white hover:bg-white hover:text-black hover:duration-700  rounded-full justify-center items-center cursor-pointer"
            href={"/"}
          >
            Mint Now
          </a>
          <a
            className="flex px-2 h-12 text-sm font- border w-28 border-white  text-white hover:bg-purple-600 hover:duration-700  rounded-full justify-center items-center cursor-pointer"
            href={"/"}
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
