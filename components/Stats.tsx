import React from "react";

const Stats = () => {
  return (
    <section className="bg-primarycolor col-span-12 sm:col-span-6 lg:col-span-3  2xl:w-[321px] h-[440px]">
      <h2 className="text-xl m-2">Stats</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="relative flex items-center justify-center col-span-2">
          <svg viewBox="0 0 36 36">
            <path
              className="circle fill-none stroke-[2.8px] stroke-[#5C7457]"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              stroke-width="1"
              strokeDasharray="60,100"
            />
          </svg>
          <p className="absolute text-xl">60%</p>
        </div>
        <div className="relative flex items-center justify-center col-span-2 ">
          <svg viewBox="0 0 36 36">
            <path
              className="circle fill-none stroke-[2.8px] stroke-[#5C7457]"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              stroke-width="1"
              strokeDasharray="86,100"
            />
          </svg>
          <p className="absolute text-xl">90%</p>
        </div>
        <div className="relative flex items-center justify-center col-span-2">
          <svg viewBox="0 0 36 36">
            <path
              className="circle fill-none stroke-[2.8px] stroke-[#5C7457]"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              stroke-width="1"
              strokeDasharray="74,100"
            />
          </svg>
          <p className="absolute text-xl">74%</p>
        </div>
        <div className="relative flex items-center justify-center col-span-2 ">
          <svg viewBox="0 0 36 36">
            <path
              className="circle fill-none stroke-[2.8px] stroke-[#5C7457]"
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              stroke-width="1"
              strokeDasharray="100,100"
            />
          </svg>
          <p className="absolute text-xl">100%</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
