import React from "react";
import { useSelector } from "react-redux";
import navState from "../../redux/slices/navStateSlice";

const navOptions = [
  {
    design: [
      "design",
      "design",
      "design",
      "design",
      "design",
      "design",
      "design",
    ],
    dev: [
      "utveckling",
      "utveckling",
      "utveckling",
      "utveckling",
      "utveckling",
      "utveckling",
      "utveckling",
    ],
    manuals: [
      "manualer",
      "manualer",
      "manualer",
      "manualer",
      "manualer",
      "manualer",
      "manualer",
    ],
  },
];

const SubNav = () => {
  const stateHandler = useSelector((state: any) => state.navState);

  return (
    <div
      className={`absolute top-20 bg-primarycolor w-0  lg:w-full h-10  ${
        stateHandler ? "" : "hidden"
      }`}
    >
      <ul className="hidden lg:h-full lg:flex items-center justify-around ">
        {/* {navOptions.obj.map((option, key) => (
          <li key={key}></li>
        ))} */}
      </ul>
    </div>
  );
};

export default SubNav;
