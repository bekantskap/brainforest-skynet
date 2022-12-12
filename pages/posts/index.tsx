import React, { ReactElement } from "react";
import CardArticle from "../../components/CardArticle";
import Layout from "../../layouts/Layout";
import { NextPageWithLayout } from "../_app";

const Posts: NextPageWithLayout = () => {
  return (
    <div>
      <h2 className="pt-2 pb-2 text-2xl">Header</h2>
      <section className="grid grid-cols-12 gap-4">
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
        <CardArticle />
        <CardArticle />
      </section>
    </div>
  );
};

export default Posts;

Posts.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
