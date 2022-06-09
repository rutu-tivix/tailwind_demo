import { useState } from "react";
import { Link } from "react-router-dom";

import twitch from "../assets/icons/twitch.svg";

function Header() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1  bg-white transition ease transform duration-300`;
  return (
    <nav
      className={`flex justify-between flex-wrap transition duration-150 ease-out bg-brown  -500 p-3 sticky top-0 z-50`}
    >
      <div className="flex items-center px-7 flex-shrink-0 text-white mr-6">
        <img src={twitch} alt="logo" />
        <span className="text-xl mx-3 font-medium uppercase text-white tracking-widest hidden lg:block">
          twitch
        </span>
      </div>

      <div className=" lg:hidden mx-8 my-3">
        <button
          className="flex flex-col h-12 w-12 "
          onClick={() => setNavOpen(!isNavOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "rotate-45 translate-y-3  group-hover:opacity-100"
                : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen ? "opacity-0" : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isNavOpen
                ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
                : " group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } w-full lg:flex justify-center  lg:items-center lg:w-auto  `}
      >
        <div className="text-sm lg:flex-grow  ">
          <Link
            to="/"
            className=" lg:inline-flex flex items-center lg:mt-2 sm:mt-4 md:mt-4 text-teal-200 uppercase text-white mx-4 hover:underline hover: underline-offset-8"
          >
            Top Games
          </Link>
          <Link
            to="/top_stream"
            className=" lg:inline-flex flex items-center lg:mt-2 sm:mt-4 md:mt-4 text-teal-200 uppercase text-white mx-4 hover:underline hover: underline-offset-8"
          >
            Top Live Streams
          </Link>
        </div>
        {/* <div>
          <span className=" mx-3 text-sm uppercase text-white ">Log in</span>
          <a
            href="/"
            className="inline-block font-semibold text-sm px-5 py-4 mx-7 leading-none border bg-white   text-black border-white hover:border-transparent  lg:mt-0 uppercase"
          >
            Get started{" "}
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
