import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiteContext } from "../pages/_app";

const MobileNav = () => {
  const context = useContext(SiteContext) as any;

  // const [modal, setModal] = useState(false);
  const handleModal = () => {
    context.setModal(!context.modal);
  };
  return (
    // FIXA NAVBAREN SÅ ATT DET INTE GÅR ATT SCROLLA NÄR DEN ÄR AKTIV
    <>
      <div className="z-10 w-full  flex justify-between items-center lg:hidden">
        <Link href="/dashboard">
          <h2 className="text-4xl ml-8 font-bold">b</h2>
        </Link>
        {context.modal ? (
          <AiOutlineClose
            size={30}
            onClick={handleModal}
            className="hover:cursor-pointer mr-8 text-textcolor"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={handleModal}
            className="hover:cursor-pointer mr-8 text-textcolor"
          />
        )}
      </div>
      <div
        className={`lg:hidden absolute top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen  bg-accentcolor text-center ease-in duration-300 ${
          context.modal ? " left-0 overflow-hidden" : "left-[-100%]"
        }`}
      >
        <ul>
          <li
            onClick={handleModal}
            className="p-4 text-4xl hover:text-gray-500"
          >
            <Link href="/">DESIGN</Link>
          </li>
          <li
            onClick={handleModal}
            className="p-4 text-4xl hover:text-gray-500"
          >
            <Link href="/#gallery">UTVECKLING</Link>
          </li>
          <li
            onClick={handleModal}
            className="p-4 text-4xl hover:text-gray-500"
          >
            <Link href="/work">MANUALER</Link>
          </li>
        </ul>
        <div className="absolute top-8 flex">
          <div className="p-4">LOGGA UT</div>
          <div className="p-4">ADMIN</div>
        </div>
        <form className="flex relative items-center w-40">
          <AiOutlineSearch className="text-xl absolute ml-[6px]" />

          <input
            type="text"
            className="cursor-pointer z-10 h-8 w-full relative rounded-full border bg-transparent outline-none pl-8 pr-4 transition-width ease-in-out duration-700"
          ></input>
        </form>
      </div>
    </>
  );
};

export default MobileNav;
