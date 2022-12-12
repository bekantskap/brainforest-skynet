import Image from "next/image";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { SiteContext } from "../pages/_app";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const context = useContext(SiteContext);

  return (
    <>
      <Navbar />
      <main className={`w-screen h-fit flex flex-col items-center`}>
        {children}
      </main>
      ;
    </>
  );
};

export default Layout;
