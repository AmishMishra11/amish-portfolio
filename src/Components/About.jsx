import React from "react";

function About() {
  return (
    <div
      id="about"
      className="bg-backgroundLight flex flex-col justify-start items-start w-full p-5"
    >
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-border w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        About
      </div>

      <div className="flex xl:flex-row flex-col">
        <div className="flex flex-col">
          <div>
            <div className="pl-[2rem] md:pl-[12rem] flex flex-col">
              <div className="font-body text-primary text-[3.25rem]">
                Education
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col items-start text-white text-[1.25rem] pt-1">
                  <div className="text-border text-xl font-medium">
                    Class 12{" "}
                  </div>
                  <div>Sri Chaitanya ,Vizag, A.P. </div>
                  <div>82%</div>
                </div>

                <div className="flex flex-col items-start text-white text-[1.25rem]">
                  <div className="text-border text-xl font-medium">
                    BACHELOR OF TECHNOLOGY{" "}
                  </div>
                  <div>Government Engineering College, Rewa </div>
                  <div>Current</div>
                </div>
              </div>
            </div>

            <div className="pl-[2rem] md:pl-[12rem] flex flex-col">
              <div className="font-body text-primary text-[3.25rem]">
                Hobbies
              </div>
              <div className="flex flex-col items-start text-white text-[1.25rem]">
                <div>Listening to music</div>
                <div>Playing games and chess</div>
                <div>Watching anime and movies</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <div className="pl-[2rem] md:pl-[12rem] flex flex-col">
              <div className="font-body text-primary text-[3.25rem]">
                Work Experience
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col items-start text-white text-[2.75rem] pt-1">
                  <div className="text-border text-xl font-medium">
                    2022 August - 2023 April
                  </div>
                  <div className="font-body text-left text-purpleDark text-[2.25rem]">
                    React Developer
                  </div>
                  <div className="text-border text-xl font-medium">
                    Clientell
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
