import { NftsData } from "@/Data/NftsData";
import React from "react";
import Slider, { Settings } from "react-slick";
import TrendingCard from "./TrendingCard";

const settings: Settings = {
  centerMode: false,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
  arrows: true,
};

const TrendingNfts = () => {
  const fewNft = NftsData.slice(0,4);
  return (
    <section className="mt-8">
      <div className="flex flex-col relative justify-center items-center py-12">
        <h1 className="text-white text-3xl font-bold ">
          Trending NFTs
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 h-full w-full left-50 blur-3xl z-[-99]"></div>
        <div className="flex flex-row space-x-6" >
          {fewNft.map((nft) => (
            <TrendingCard
              key={nft.id}
              id={nft.id}
              banner={nft.banner}
              NFtName={nft.NFtName}
              ownerName={nft.ownerName}
              ownerPfp={nft.ownerPfp}
              price={nft.price}
            />
          ))}
        </div>
        <a
          className="flex px-2 h-16 text-xl font-bold border-2 border-white text-white hover:bg-purple-600 hover:duration-700 w-40 rounded-full justify-center items-center cursor-pointer"
          href={"/"}
        >
          See More
        </a>
      </div>

    </section>
  );
};

export default TrendingNfts;
