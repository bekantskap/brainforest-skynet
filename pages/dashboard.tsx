import React, { ReactElement } from "react";
import Head from "next/head";
import CardDouble from "../components/CardDouble";
import Cases from "../components/Cases";
import CardSmall from "../components/CardSmall";
import Events from "../components/Events";
import Stats from "../components/Stats";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import client from "../utils/client";
import { gql } from "@apollo/client";
import { getPageStaticProps } from "../utils/getPageStaticProps";

const Dashboard: NextPageWithLayout = ({ posts, menuItems }: any) => {
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

export const getStaticProps = getPageStaticProps;

// export async function getStaticProps() {
//   const res = await client.query({
//     query: gql`
//       query PageQuery {
//         posts(first: 4, after: null) {
//           nodes {
//             databaseId
//             uri
//             title
//             date
//           }
//         }
//         menuItems {
//           nodes {
//             label
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       posts: res.data.posts.nodes,
//       navMenu: res.data.menuItems.nodes,
//     },
//   };
// }
