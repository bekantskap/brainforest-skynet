import Head from "next/head";
import Image from "next/image";
import CardDouble from "../components/CardDouble";
import Case from "../components/Case";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-[80vh] flex justify-center">
        <section className="grid grid-cols-4 gap-4 m-4">
          <Case />
          <Case />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <CardDouble />
        </section>
      </main>
    </>
  );
}
