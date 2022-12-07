import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import { createContext, useState } from "react";
import { INavState, NavContextType } from "../typing";
import React from "react";

type SubNavType = {
  subNav: string | null;
  setSubNav: React.Dispatch<React.SetStateAction<string | null>>;
};

export const SiteContext = createContext<NavContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [subNav, setSubNav] = useState<INavState>({
    subnav: false,
    navdir: "",
  });

  const providerValue = React.useMemo(
    () => ({
      subNav,
      setSubNav,
    }),
    [subNav, setSubNav]
  );

  return (
    <>
      <SiteContext.Provider value={providerValue}>
        <Navbar />
        <Component {...pageProps} />
      </SiteContext.Provider>
    </>
  );
}
