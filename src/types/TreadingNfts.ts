import { StaticImageData } from "next/image";

export type trendingNfts = {
    id: number;
    banner: StaticImageData;
    NFtName: string;
    ownerName: string;
    ownerPfp: StaticImageData;
    price: number;
  };