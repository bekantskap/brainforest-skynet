import Head from 'next/head';
import CardDouble from '../components/CardDouble';
import Case from '../components/Cases';
import CardSmall from '../components/CardSmall';
import Events from '../components/Events';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-fit lg:h-[90vh] flex justify-center items-center">
        <h2>Index</h2>
      </main>
    </>
  );
}
