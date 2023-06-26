import React from 'react';
import {Wallet,Menu,X} from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';
import logo from "/public/imgs/Logo1.bmp"
import profileImg from "/public/imgs/profile.jpg"


const NavBar = () => {
  return (
    <header className="header absolute top-0 left-0 w-full bg-blue-600 shadow-lg py-4 z-4">
      <div className="container flex gap-2">
        <Link href="/">
          {/* <Image src={logo} width="40" height="40" alt="Metalink home" className="logo-small" /> */}
          <Image src={logo} width="126" height="28" alt="Metalink home" className="logo" />
        </Link>
        <nav className="navbar top-full left-0 w-full h-0 bg-blue-600 px-4 shadow-lg z-1 "> 
        {/* overflow-hidden  absolute*/}
          <ul className="navbar-list flex gap-4">
            <li>
              <Link href="/" className="navbar-link label-lg link:hover">Home</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover">Explore</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover">Wallet</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover">About Us</Link>
            </li>
            <li>
              <Link href="/" className="navbar-link label-lg link:hover">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-action flex gap-2">
          <button className="btn-icon primary" aria-label="wallet">
          <Wallet />
          </button>
          <button className="btn-icon profil-btn" aria-label="account: MBZ">
            <Image src={profileImg} width="50" height="50" alt="Mbz" className="img-cover rounded-full" />
          </button>
          {/* <button className="nav-toggle-btn" aria-label="menu toggle" data-nav-toggler>
          <Menu />
          <X />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;

