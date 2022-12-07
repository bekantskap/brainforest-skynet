import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import navState, { setSubNav } from "../../redux/slices/navStateSlice";

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
  const stateHandler = useSelector((state: any) => state.navState);
  const searchParam = stateHandler.navDir;
  const dispatch = useDispatch();

  const handleNav = () => {
    const newObj = {
      subNav: false,
      navDir: "",
    };
    dispatch(setSubNav(newObj));
  };

  return (
    <div
      className={`absolute top-20 bg-textcolor w-0  lg:w-full h-10  ${
        stateHandler.subNav ? "" : "hidden"
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
