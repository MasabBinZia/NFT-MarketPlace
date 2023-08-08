import { StaticImageData } from "next/image";
import metamask from "@/assets/imgs/metamask-logo.png";
import Coinbase from "@/assets/imgs/Coinbase.svg.png";
import SafePal from "@/assets/imgs/safepal.png";
import Exodus from "@/assets/imgs/EXODUS.png";
import { brandsdata } from "@/types/brands";


export const BrandsData: brandsdata[] = [
  {
    id: 1,
    img: metamask,
    name: "Metamask",
  },
  {
    id: 2,
    img: Coinbase,
    name: "Coinbase",
  },
  {
    id: 3,
    img: SafePal,
    name: "SafePal",
  },
  {
    id: 4,
    img: Exodus,
    name: "Exodus",
  },
];
