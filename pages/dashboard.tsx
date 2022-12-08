import React from 'react';
import Head from 'next/head';
import CardDouble from '../components/CardDouble';
import Case from '../components/Cases';
import CardSmall from '../components/CardSmall';
import Events from '../components/Events';
import Stats from '../components/Stats';
import Layout from '../layouts/Layout';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid grid-cols-4 gap-4 sm:m-4">
        <Case />
        <Events />
        <CardSmall />
        <CardSmall />
        <Stats />
        <CardDouble />
      </section>
    </>
  );
};

export default Dashboard;

Dashboard.Layout = Layout;
