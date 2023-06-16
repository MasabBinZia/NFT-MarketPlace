import React from 'react';
import {Wallet,Menu,X} from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/logo.svg"
import profileImg from "/public/profile.jpg"

const NavBar = () => {
  return (
    <header className="header absolute top-0 left-0 w-full py-4 z-4 shadow-1 bg-oxford-blue-2">
      <div className="container flex justify-between items-center">
        <Link href="/">
          {/* <Image src={logo} width="40" height="40" alt="Metalink home" className="logo-small" /> */}
          <Image src={logo} width="126" height="28" alt="Metalink home" className="logo hidden" />
        </Link>

        <nav className="navbar absolute top-full left-0 w-full h-0 bg-oxford-blue-2 ps-4 shadow-1 z-1 hidden">
          <ul className="navbar-list">
            <li>
              <Link href="/" className="navbar-link label-lg link:hover  text-white font-semibold py-4 px-5">Home</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover  text-white font-semibold py-4 px-5">Explore</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover  text-white font-semibold py-4 px-5">Wallet</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover  text-white font-semibold py-4 px-5">About Us</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover  text-white font-semibold py-4 px-5">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-action flex gap-2">
          <button className="btn-icon primary" aria-label="wallet">
          <Wallet />
          </button>
          <button className="btn-icon profil-btn" aria-label="account: MBZ">
            <Image src={profileImg} width="50" height="50" alt="Mbz" className="img-cover" />
          </button>
          <button className="nav-toggle-btn" aria-label="menu toggle" data-nav-toggler>
          <Menu />
          <X />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;


