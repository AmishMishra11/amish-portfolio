import React from "react";

function About() {
  return (
    <div
      id="about"
      className="bg-neutral-800 flex flex-col justify-start items-start w-full p-5"
    >
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-[#6B4748] w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        About
      </div>

      <div>
        <div className="pl-[2rem] md:pl-[12rem] flex flex-col">
          <div className="font-body text-primary text-[3.25rem]">Education</div>
          <div className="flex flex-col">
            <div className="flex items-start">
              <div className="text-white text-[1.5rem] flex justify-center items-center">
                -&gt;
              </div>
              <div className="flex flex-col items-start text-white text-[1.25rem] pt-1">
                <div>Class 12 </div>
                <div>Sri Chaitanya ,Vizag, A.P. </div>
                <div>82%</div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-white text-[1.5rem] flex justify-center items-center">
                -&gt;
              </div>
              <div className="flex flex-col items-start text-white text-[1.25rem]">
                <div>BACHELOR OF TECHNOLOGY </div>
                <div>Government Engineering College, Rewa </div>
                <div>Current</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-[2rem] md:pl-[12rem] flex flex-col">
          <div className="font-body text-primary text-[3.25rem]">Hobbies</div>
          <div className="flex flex-col items-start text-white text-[1.25rem]">
            <div>Listening to music</div>
            <div>Playing games and chess</div>
            <div>Watching anime and movies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
