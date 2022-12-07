import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/Navbar";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
