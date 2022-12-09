import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import {
  IModalState,
  INavState,
  ModalContextType,
  NavContextType,
} from "../typing";
import React from "react";

export const SubNavContext = createContext<NavContextType | null>(null);
export const SiteContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [subNav, setSubNav] = useState<INavState>({
    subnav: false,
    navdir: "",
  });

  const [modal, setModal] = useState<IModalState>();

  const providerValue = React.useMemo(
    () => ({
      subNav,
      setSubNav,
      modal,
      setModal,
    }),
    [subNav, setSubNav, modal, setModal]
  );

  const Layout = Component.Layout || EmptyLayout;

  return (
    <>
      <SiteContext.Provider value={providerValue}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SiteContext.Provider>
    </>
  );
}

const EmptyLayout = ({ children }: any) => <>{children}</>;
