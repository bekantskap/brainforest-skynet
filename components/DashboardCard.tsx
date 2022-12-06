import React from "react";

const DashboardCard = () => {
  return (
    <section className=" bg-primarycolor col-span-1  2xl:w-[321px] h-[440px]">
      <h2 className="text-xl m-2">Title</h2>
      <article className="m-4">
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-xs">December 2022</p>
      </article>
      <div className="h-[1px] w-[90%] m-auto bg-textcolor"></div>
      <article className="m-4">
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-xs">December 2022</p>
      </article>
      <div className="h-[1px] w-[90%] m-auto bg-textcolor"></div>
      <article className="m-4">
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-xs">December 2022</p>
      </article>
    </section>
  );
};

export default DashboardCard;
