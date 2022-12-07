import Link from "next/link";
import React, { useContext } from "react";
import { SiteContext } from "../../pages/_app";
import { NavContextType } from "../../typing";

// const navOptions = [
//   {
//     design: [
//       "design",
//       "design",
//       "design",
//       "design",
//       "design",
//       "design",
//       "design",
//     ],
//     dev: [
//       "utveckling",
//       "utveckling",
//       "utveckling",
//       "utveckling",
//       "utveckling",
//       "utveckling",
//       "utveckling",
//     ],
//     manuals: [
//       "manualer",
//       "manualer",
//       "manualer",
//       "manualer",
//       "manualer",
//       "manualer",
//       "manualer",
//     ],
//   },
// ];

const SubNav = () => {
  const context = useContext(SiteContext) as NavContextType;

  const handleNav = () => {
    const newObj = {
      subnav: false,
      navdir: "",
    };
    // dispatch(setSubNav(newObj));
    context.setSubNav(newObj);
  };

  return (
    <div
      className={`absolute top-20 bg-textcolor w-0  lg:w-full h-10  ${
        context.subNav.subnav ? "" : "hidden"
      }`}
    >
      <ul className="hidden text-primarycolor lg:h-full lg:flex items-center justify-around ">
        <Link onClick={handleNav} href="/posts">
          <li>Lorem</li>
        </Link>
        <Link onClick={handleNav} href="/posts">
          <li>Lorem</li>
        </Link>
        <Link onClick={handleNav} href="/posts">
          <li>Lorem</li>
        </Link>
        <Link onClick={handleNav} href="/posts">
          <li>Lorem</li>
        </Link>
      </ul>
    </div>
  );
};

export default SubNav;
