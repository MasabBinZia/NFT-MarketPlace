import Link from "next/link";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-purple-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-start text-start  lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 px-4 lg:px-12  text-start md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-start md:justify-start justify-start text-white"
          >
            {/* <Image width={150} height={150} src={logo} alt="Logo" /> */}
            NFT MarketPlace
          </Link>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
            perferendis tempore esse quia impedit?
          </p>
          {/* social icons */}
          <div className="flex mt-4">
            <a
              href="#"
              className="bg-purple-600 rounded-md h-10 w-10 flex justify-center items-center mr-2"
            >
              <Facebook color="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="bg-purple-600  rounded-md h-10 w-10 flex justify-center items-center mr-2"
            >
              <TwitterIcon color="#FFFFFF" size={20} />
            </a>
            <a
              href="#"
              className="bg-purple-600  rounded-md h-10 w-10 flex justify-center items-center mr-2"
            >
              <LinkedinIcon color="#FFFFFF" size={20} />
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-white hover:text-sky-600">About</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">Terms of Use</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">Privacy Policy</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">How it Works</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-white hover:text-sky-600">Support Carrer</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">24h Service</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">Quick Chat</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font tracking-widest mb-3 text-xl font-bold">
              Contact
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li>
                <a className="text-white hover:text-sky-600">Whatsapp</a>
              </li>
              <li>
                <a className="text-white hover:text-sky-600">Support 24h</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-purple-600 text-sm text-center sm:text-left">
            <Link href={"https://github.com/MasabBinZia"}>
              Made by{" "}
              <span className="text-bold underline text-sky-500">
                Masab Bin Zia
              </span>
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link
              href={"https://www.linkedin.com/in/masab-bin-zia-411a0922a/"}
              className="w-5 h-5 ml-3 text-white"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href={"https://www.instagram.com/masab_mbz/"}
              className="w-5 h-5 ml-3 text-white"
            >
              <InstagramIcon />
            </Link>
            <Link
              href={"https://twitter.com/hadescreeping"}
              className="w-5 h-5 ml-3 text-white"
            >
              <TwitterIcon />
            </Link>
            <Link
              href={"https://github.com/MasabBinZia"}
              className="w-5 h-5 ml-3 text-white"
            >
              <GithubIcon />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
