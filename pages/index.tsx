import Head from "next/head";
import CardDouble from "../components/CardDouble";
import Case from "../components/Cases";
import CardSmall from "../components/CardSmall";
import Events from "../components/Events";
import Stats from "../components/Stats";
import Link from "next/link";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <h2>Index</h2>
        <Link href="/dashboard">
          <p className="hover:underline cursor-pointer">To The Dashboard</p>
        </Link>
      </main>
    </>
  );
}

Home.Layout = Layout;
