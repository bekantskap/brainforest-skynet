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
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/client";

export const SubNavContext = createContext<NavContextType | null>(null);
export const SiteContext = createContext<any>(null);

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={client}>
      <SiteContext.Provider value={providerValue}>
        {getLayout(<Component {...pageProps} />)}
      </SiteContext.Provider>
    </ApolloProvider>
  );
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
