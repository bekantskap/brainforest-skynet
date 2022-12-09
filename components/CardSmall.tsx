import Link from "next/link";
import React from "react";

const CardSmall = () => {
  return (
    <section className=" bg-primarycolor col-span-12 sm:col-span-6 lg:col-span-3  2xl:w-[321px] h-[440px]">
      <h2 className="text-xl m-2">Title</h2>
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
      </article>
    </section>
  );
};

export default CardSmall;
