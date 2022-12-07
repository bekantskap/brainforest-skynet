import Head from "next/head";
import CardDouble from "../components/dashboard/CardDouble";
import Case from "../components/dashboard/Cases";
import CardSmall from "../components/dashboard/CardSmall";
import Events from "../components/dashboard/Events";
import Stats from "../components/dashboard/Stats";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-fit lg:h-[90vh] flex justify-center items-center">
        <section className="grid grid-cols-4 gap-4 sm:m-4">
          <Case />
          <Events />
          <CardSmall />
          <CardSmall />
          <Stats />
          <CardDouble />
        </section>
      </main>
    </>
  );
}
