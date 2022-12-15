import React from "react";

import photo from "../Assets/photo.jpg";

function Intro() {
  return (
    <div
      id="intro"
      className="bg-neutral-800 flex justify-center items-center h-[calc(100vh-6rem)]"
    >
      <div className="flex flex-col md:flex-row  justify-center items-end">
        <img
          className="rounded-md md:rounded-br-none border-[1rem]  border-[#F6BFC2] max-h-[35vh] md:max-h-[35vh] xl:max-h-[65vh] "
          src={photo}
          alt="Myself"
        />

        <div className="font-body pl-6 pb-6 flex flex-col justify-end items-start rounded-md md:rounded-r-md text-secondary bg-primary w-[16rem] h-[8rem] md:w-[20rem] md:h-[12rem]  xl:w-[30rem] xl:h-[22rem]">
          <div className=" text-[1rem] md:text-[1.75rem]  xl:text-[2.25rem]">
            Hi! I am
          </div>
          <div className=" text-[1rem] md:text-[2.5rem]  xl:text-[4.5rem]">
            Amish Mishra
          </div>
          <div className=" text-[1rem] md:text-[1.75rem]  xl:text-[2.25rem] underline">
            Front-end Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
