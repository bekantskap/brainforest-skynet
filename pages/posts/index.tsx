import React from "react";
import CardArticle from "../../components/posts/CardArticle";

const Posts = () => {
  return (
    <main className="w-screen min-h-fit">
      <h2 className="p-4 ml-16 text-2xl">Header</h2>
      <div className="flex flex-col items-center">
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
    </main>
  );
};

export default Posts;
