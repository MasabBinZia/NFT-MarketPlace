"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* Large Devices */}
      <div className="flex justify-between items-center mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <div className="logo cursor-pointer text-white">
          <Link href={"/"}>NFT MarketPlace</Link>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <X
              className="text-white cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          ) : (
            <Menu
              className="text-white cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          )}
        </div>
        <div
          className={`hidden text-white md:flex flex-col md:flex-row gap-x-10`}
        >
          <Link
            href={""}
            className="text-lg hover:text-purple-600 hover:duration-700 "
          >
            Mint
          </Link>
          <Link
            href={""}
            className="text-lg hover:text-purple-600 hover:duration-700"
          >
            Team
          </Link>
          <Link
            href={""}
            className="text-lg hover:text-purple-600 hover:duration-700"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="text-lg hover:text-purple-600  hover:duration-700"
          >
            FAQ
          </Link>
        </div>
        <a
          className={`hidden md:flex px-2 h-10 w-32 rounded-full bg-purple-600 border-2 border-purple-600 hover:bg-black hover:duration-700  text-white font-bold justify-center items-center cursor-pointer`}
        >
          <Wallet className="mr-2" />
          Connect
        </a>
        {/* Mobile Devices */}
        <div
          className={`${
            isMenuOpen
              ? "fixed inset-0 z-50 bg-black transition-opacity duration-300 ease-in-out"
              : "hidden"
          }`}
        >
          <div className="flex justify-between items-center text-white h-16 px-4 sm:px-6">
            <Link href={"/"}>NFT MarketPlace</Link>
            <div className="md:hidden">
              {isMenuOpen ? (
                <X
                  className="text-white cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              ) : (
                <Menu
                  className="text-white  cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              )}
            </div>
          </div>
          <div className={`px-2 pt-2 pb-3 space-y-1 bg-black`}>
            <Link
              href={""}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              Mint
            </Link>
            <Link
              href={""}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              Team
            </Link>
            <Link
              href={""}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              FAQ
            </Link>
            <div className={` justify-center`}>
              <a
                className={`flex px-2 h-10 w-32 rounded-full bg-purple-600 border-2 border-purple-600 hover:bg-black hover:duration-700  text-white font-bold justify-center items-center cursor-pointer`}
              >
                <Wallet className="mr-2" />
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
