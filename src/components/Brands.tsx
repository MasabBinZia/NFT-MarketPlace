import Link from "next/link";
import Image from "next/image";
import React from "react";
import metamask from "@/assets/imgs/metamask-logo.png";
import Trust from "@/assets/imgs/Trust.png";
import WalletConnect from "@/assets/imgs/walletconnect.png";
import SafePal from "@/assets/imgs/safepal.png";
import Exodus from "@/assets/imgs/EXODUS.png";

const Brands = () => {
  return (
    <>
      <section className="flex justify-center mt-12">
        <div className="bg-gradient-to-r w-[700px] from-purple-600 via-blue-600 to-purple-600 rounded-2xl  ">
          <div className="container flex h-[200px] justify-center items-center">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="flex flex-wrap  items-center justify-center">
                  <Link
                    className="mx-4 flex  w-[100px] items-center justify-center  2xl:w-[150px]"
                    href={"/"}
                  >
                    <Image
                      className="w-full h-full"
                      alt="Brand Image"
                      src={metamask}
                    />
                  </Link>
                  <Link
                    className="mx-4 flex w-[100px] items-center justify-center  2xl:w-[150px]"
                    href={"/"}
                  >
                    <Image
                      className="w-full h-full"
                      alt="Brand Image"
                      src={Trust}
                    />
                  </Link>
                  <Link
                    className="mx-4 flex w-[100px] items-center justify-center  2xl:w-[150px]"
                    href={"/"}
                  >
                    <Image
                      className="w-full h-full"
                      alt="Brand Image"
                      src={WalletConnect}
                    />
                  </Link>
                  <Link
                    className="mx-4 flex w-[100px] items-center justify-center  2xl:w-[150px]"
                    href={"/"}
                  >
                    <Image
                      className="w-full h-full"
                      alt="Brand Image"
                      src={SafePal}
                    />
                  </Link>
                  <Link
                    className="mx-4 flex w-[100px] items-center justify-center  2xl:w-[150px]"
                    href={"/"}
                  >
                    <Image
                      className="w-full h-full"
                      alt="Brand Image"
                      src={Exodus}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
