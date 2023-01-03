import Link from "next/link";
import React from "react";
import { dateCleaner } from "../utils/dateCleaner";

const CardSmall = ({ posts }: any) => {
  return (
    <section className=" bg-primarycolor col-span-12 sm:col-span-6 lg:col-span-3  2xl:w-[321px] h-[440px]">
      <h2 className="text-xl font-semibold m-2">Title</h2>
      {posts.map((post: any, key: number) => (
        <>
          <article key={key} className="m-4">
            <Link href={`posts${post.uri}`}>
              <p className="text-md font-semibold hover:underline">
                {post.title}
              </p>
            </Link>
            <p className="text-xs">{dateCleaner(post.date)}</p>
          </article>
          <div className="h-[1px] w-[90%] m-auto bg-textcolor"></div>
        </>
      ))}
      {/* <article className="m-4">
        <Link href="/posts/temp">
          <p className="text-md hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Link>
        <p className="text-xs">December 2022</p>
      </article>
      <div className="h-[1px] w-[90%] m-auto bg-textcolor"></div>
      <article className="m-4">
        <Link href="/posts/temp">
          <p className="text-md hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Link>
        <p className="text-xs">December 2022</p>
      </article>
      <div className="h-[1px] w-[90%] m-auto bg-textcolor"></div>
      <article className="m-4">
        <Link href="/posts/temp">
          <p className="text-md hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Link>
        <p className="text-xs">December 2022</p>
      </article> */}
    </section>
  );
};

export default CardSmall;
