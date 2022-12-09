import React from "react";

const EventCard = () => {
  return (
    <article className="col-span-2 sm:col-span-1 h-[164px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="p-4">
        <p className="">22 Februari 2023</p>
        <h3 className="font-semibold text-lg">Event</h3>
        <div className="h-[1px] w-5/6 bg-textcolor"></div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
          lacinia erat. Maecenas ligula velit
        </p>
      </div>
    </article>
  );
};

export default EventCard;
