import Link from "next/link";
import React from "react";

const CardArticle = () => {
  return (
    <article className="w-[320px] h-[380px] bg-primarycolor col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
      <div className="p-6 h-4/5 cursor-pointer hover:underline">
        <Link href="/posts/temp">
          <h3 className="font-bold text-lg">Title</h3>
          <p className="text-md leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            lacinia erat. Maecenas ligula velit. Cras laoreet, quam in lacinia
            gravida, enim urna malesuada turpis, a fermentum augue turpis et
            turpis.
          </p>
        </Link>
      </div>
      <div className=" m-auto w-5/6">
        <div className="m-auto w-full h-[1px] bg-textcolor"></div>
        <div className="w-full flex justify-between">
          <p className="text-sm">2022 Mars</p>
          <div className="w-14 h-14 rounded-full mt-[5px] bg-textcolor"></div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
