"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import TrendingCard from "./TrendingCard";
import { NftsData } from "@/Data/NftsData";

export class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <section className="mt-8">
        <div className="py-12">
          <h1 className="text-white text-center text-3xl font-bold ">
            Trending NFTs
          </h1>
          <Slider className="" {...settings}>
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
          </Slider>
          <div className="flex justify-center mt-4">
            <a
              className="flex px-2 h-16 text-xl font-bold border-2 border-white text-white hover:bg-purple-600 hover:duration-700 w-40 rounded-full justify-center items-center cursor-pointer"
              href={"/"}
            >
              See More
            </a>
          </div>
        </div>
      </section>
    );
  }
}
