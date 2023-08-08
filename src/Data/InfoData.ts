import Wallet from "@/assets/imgs/InfoImg/Wallet.png";
import Upload from "@/assets/imgs/InfoImg/upload.png";
import Bookmark from "@/assets/imgs/InfoImg/bookmark.png";


import { StaticImageData } from "next/image";

type infodata = {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
};

export const InfoData: infodata[] = [
  {
    id: 1,
    icon: Wallet,
    title: "Set up your wallet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget molestie magna. Nam libero nisl, mattis vitae ullamcorper feugiat, luctus et erat. Phasellus id odio sit amet ex blandit ultrices. Ut facilisis nisl et viverra congue. Vestibulum rhoncus leo a eleifend semper. Ut hendrerit urna dictum sapien euismod, ut porttitor ante pretium.",
  },
  {
    id: 2,
    icon: Upload,
    title: "Upload & Create Collection",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget molestie magna. Nam libero nisl, mattis vitae ullamcorper feugiat, luctus et erat. Phasellus id odio sit amet ex blandit ultrices. Ut facilisis nisl et viverra congue. Vestibulum rhoncus leo a eleifend semper. Ut hendrerit urna dictum sapien euismod, ut porttitor ante pretium.",
  },
  {
    id: 3,
    icon: Bookmark,
    title: "List them for sale",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget molestie magna. Nam libero nisl, mattis vitae ullamcorper feugiat, luctus et erat. Phasellus id odio sit amet ex blandit ultrices. Ut facilisis nisl et viverra congue. Vestibulum rhoncus leo a eleifend semper. Ut hendrerit urna dictum sapien euismod, ut porttitor ante pretium.",
  },
];
