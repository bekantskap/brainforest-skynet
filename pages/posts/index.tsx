import React from 'react';
import CardArticle from '../../components/CardArticle';
import Layout from '../../layouts/Layout';

const Posts = () => {
  return (
    <>
      <div>
        <h2 className="p-4 text-2xl">Header</h2>
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
    </>
  );
};

export default Posts;

Posts.Layout = Layout;
