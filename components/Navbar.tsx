import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SiteContext } from '../pages/_app';
import { NavContextType } from '../typing';
import MobileNav from './MobileNav';
import SubNav from './SubNav';

const Navbar = () => {
  const context = useContext(SiteContext) as NavContextType;

  const handleSubNav = (content: string) => {
    if (context.subNav.navdir === content || content === 'close') {
      const newObj = {
        subnav: false,
        navdir: '',
      };
      context.setSubNav(newObj);
    } else {
      const newObj = {
        subnav: true,
        navdir: content,
      };
      context.setSubNav(newObj);
    }
  };

  return (
    <>
      <nav className="w-screen h-[80px] bg-primarycolor flex items-center justify-between mb-4 sm:mb-0">
        <section className=" hidden lg:w-[550px] relative lg:flex  justify-evenly items-center">
          <Link onClick={() => handleSubNav('close')} href="/dashboard">
            <h2 className="text-4xl font-bold">b</h2>
          </Link>
          <div>
            <h3 onClick={() => handleSubNav('design')} className="header-link">
              DESIGN
            </h3>
          </div>
          <div>
            <h3 onClick={() => handleSubNav('dev')} className="header-link">
              UTVECKLING
            </h3>
          </div>
          <div>
            <h3 onClick={() => handleSubNav('manuals')} className="header-link">
              MANUALER
            </h3>
          </div>
        </section>
        <SubNav />
        <section className="hidden lg:w-[400px]  lg:flex items-center justify-evenly">
          <div className="flex w-3/6 justify-evenly">
            <Link href="/">
              <h3 className="text-sm">ADMIN</h3>
            </Link>
            <Link href="/">
              <h3 className="text-sm">LOGGA UT</h3>
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
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
