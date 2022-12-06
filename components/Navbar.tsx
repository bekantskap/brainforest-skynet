import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState("");
  const [subNav, setSubNav] = useState(false);

  const handleSubNav = (content: string) => {
    if (activeSubNav === content || content === "close") {
      setSubNav(false);
      setActiveSubNav("");
    } else {
      setSubNav(true);
      setActiveSubNav(content);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav className="w-screen h-[80px] bg-primarycolor flex items-center justify-between mb-6">
        <section className=" hidden md:w-[550px] relative md:flex  justify-evenly items-center">
          <Link href="/">
            <h2 className="text-4xl font-bold">b</h2>
          </Link>
          <div>
            <Link href="/" onClick={() => handleSubNav("design")}>
              <h3 className="header-link">DESIGN</h3>
            </Link>
          </div>
          <div>
            <Link href="/" onClick={() => handleSubNav("dev")}>
              <h3 className="header-link">UTVECKLING</h3>
            </Link>
          </div>
          <div>
            <Link href="/" onClick={() => handleSubNav("manuals")}>
              <h3 className="header-link">MANUALER</h3>
            </Link>
          </div>
        </section>
        <div
          className={`absolute top-20 bg-primarycolor w-full h-10  ${
            subNav ? "" : "hidden"
          }`}
        >
          {/* FIXA DENNA SUBNAVEN */}
          <ul className="flex items-center justify-around ">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <section className="hidden md:w-[400px]  md:flex items-center justify-evenly">
          <div className="flex w-3/6 justify-evenly">
            <Link href="/">
              <h3 className="header-link">ADMIN</h3>
            </Link>
            <Link href="/">
              <h3 className="header-link">LOGGA UT</h3>
            </Link>
          </div>
          <form className="flex relative items-center w-40">
            <AiOutlineSearch className="text-xl absolute ml-[6px]" />

            <input
              type="text"
              className="cursor-pointer z-10 h-8 w-8 relative rounded-full border bg-transparent outline-none focus:w-full focus:cursor-text focus:pl-8 focus:pr-4 transition-width ease-in-out duration-700"
            ></input>
          </form>
        </section>
        <div
          onClick={handleModal}
          className="z-10 w-full flex justify-between items-center md:hidden"
        >
          <h2 className="text-4xl ml-8 font-bold">b</h2>
          {modal ? (
            <AiOutlineClose
              size={30}
              style={{ color: `black` }}
              className="hover:cursor-pointer mr-8"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{ color: "black" }}
              className="hover:cursor-pointer mr-8"
            />
          )}
        </div>
        <div
          className={`md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-accentcolor text-center ease-in duration-300 ${
            modal ? " left-0 " : "left-[-100%]"
          }`}
        >
          <ul>
            <li
              onClick={handleModal}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Lorem</Link>
            </li>
            <li
              onClick={handleModal}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Lorem</Link>
            </li>
            <li
              onClick={handleModal}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Lorem</Link>
            </li>
            <li
              onClick={handleModal}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Lorem</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
