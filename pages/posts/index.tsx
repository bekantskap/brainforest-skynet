import Head from "next/head";
import React, { ReactElement } from "react";
import CardArticle from "../../components/CardArticle";
import Layout from "../../layouts/Layout";
import { NextPageWithLayout } from "../_app";
import { getAllPosts } from "../../lib/api";

const Posts: NextPageWithLayout = ({ allPosts }: any) => {
  return (
    <div>
      <Head>
        <title>Brainforest intranät</title>
        <meta name="description" content="Brainforest intranät" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="pt-2 pb-2 text-2xl">Header</h2>
      <section className="grid grid-cols-12 gap-4">
        {/* <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle /> */}
        {allPosts.edges.map((post: any, key: number) => {
          return <CardArticle props={post} key={key} />;
        })}
      </section>
    </div>
  );
};

export default Posts;

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
}
