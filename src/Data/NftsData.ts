import { StaticImageData } from "next/image";
import Nft from "@/assets/imgs/pfo.jpeg";

type trendingNfts = {
  id: number;
  banner: string;
  NFtName: string;
  ownerName: string;
  ownerPfp: string;
  price: number;
};

export const NftsData: trendingNfts[] = [
  {
    id: 1,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 2,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 3,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 4,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 5,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 6,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 7,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 8,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
  {
    id: 9,
    banner:
      "https://i.seadn.io/gae/0iCsYxXL_Gcd9r5lNXJKKGVeMsYBuIcEiIJDGhqRfWYmXZxp2yUVExhIgbQQl_HPE1dW3T80Aa8T3-iLv7yxIlK9zk-vC84kW-AK?auto=format&dpr=1&w=1000",
    NFtName: "Lady Ape# 5049",
    ownerName: "Almost_serious_art_gallery",
    ownerPfp:
      "https://i.seadn.io/gcs/files/eebe0d157c7c935a49007f77d93b8b44.jpg?auto=format&dpr=1&w=256",
    price: 12,
  },
];
