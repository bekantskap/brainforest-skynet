import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  return (
    <section className="bg-primarycolor w-6/6  h-[420px] col-span-4 lg:col-span-2 2xl:w-[660px]">
      <h3 className="text-xl ml-4 mt-2 font-semibold">Events</h3>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 mt-2 gap-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
};

export default Events;
