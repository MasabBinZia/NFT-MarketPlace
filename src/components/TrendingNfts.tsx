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
  return (
    <section className="mt-8">
      <div className="flex flex-col relative justify-center items-center py-12">
        <h1 className="text-white text-3xl font-bold ">
          <span className="from-sky-200 via-purple-600 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent">
            Trending&nbsp;
          </span>
          <span className="from-purple-600 via-sky-200 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent">
            NFTs
          </span>
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 h-full w-full left-50 blur-3xl z-[-99]"></div>
        <div className="flex flex-row" >
        {NftsData.map((nft) => (
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
      </div>
    </section>
  );
};

export default TrendingNfts;
