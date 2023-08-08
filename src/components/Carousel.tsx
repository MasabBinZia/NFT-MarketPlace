"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCard from "./NftCard";
import { NftsData } from "@/Data/NftsData";

export class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      customPaging: function () {
        return (
          <a className="">
            <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
          </a>
        );
      },
      dotsClass: "slick-dots w-max absolute mt-20  ",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    };

    return (
      <section className="lg:px-24 ">
        <header className="text-center mx-auto mb-6 lg:px-20">
          <h2 className="text-3xl text-center uppercase py-6 eading-normal font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
            Trending Nft
          </h2>
        </header>
        <Slider
          {...settings}
          arrows={false}
          className="flex items-stretch justify-items-stretch "
        >
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
      </section>
    );
  }
}
