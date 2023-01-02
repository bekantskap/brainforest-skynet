import React, { ReactElement } from "react";
import Head from "next/head";
import CardDouble from "../components/CardDouble";
import Cases from "../components/Cases";
import CardSmall from "../components/CardSmall";
import Events from "../components/Events";
import Stats from "../components/Stats";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import client from "../lib/client";
import { gql } from "@apollo/client";

const Dashboard: NextPageWithLayout = ({ posts }: any) => {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid grid-cols-12 gap-4 m-4">
        <Cases />
        <Events />
        <CardSmall posts={posts} />
        <CardSmall posts={posts} />
        <Stats />
        <CardDouble />
      </section>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;

const GET_POSTS = gql`
  query NewQuery {
    posts(first: 4, after: null) {
      nodes {
        databaseId
        uri
        title
        date
      }
    }
  }
`;

export async function getStaticProps() {
  const res = await client.query({
    query: GET_POSTS,
  });

  return {
    props: {
      posts: res.data.posts.nodes,
    },
  };
}
