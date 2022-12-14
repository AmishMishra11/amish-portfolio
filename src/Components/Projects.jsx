import React from "react";

import AMComp from "../Assets/Projects/am-comp.png";
import Mercart from "../Assets/Projects/mercart.png";
import MCUTube from "../Assets/Projects/mcu-tube.png";
import Instanic from "../Assets/Projects/instanic.png";
import Funime from "../Assets/Projects/funime.png";

function Projects() {
  const project = [
    {
      name: "AM-Comp",
      description: "My very own component library made with HTML and CSS.",
      url: AMComp,
      live: "https://am-component.netlify.app/",
      code: "https://github.com/AmishMishra11/AM-Comp",
    },
    {
      name: "Mercart",
      description: "Marvel based ecommerce store built with react JS.",
      url: Mercart,
      live: "https://mercart-react.netlify.app/",
      code: "https://github.com/AmishMishra11/Mercart-react",
    },
    {
      name: "MCU-Tube",
      description: "Marvel Based Video Library built with react JS.",
      url: MCUTube,
      live: "https://mcutube.netlify.app/",
      code: "https://github.com/AmishMishra11/MCU-Tube",
    },
    {
      name: "Instanic",
      description: "A Note Making app built with react JS.",
      url: Instanic,
      live: "https://instanic.netlify.app/",
      code: "https://github.com/AmishMishra11/Instanic",
    },
    {
      name: "Funime",
      description:
        "Anime Themed Social media app made with react js ​redux toolkit and tailwind css",
      url: Funime,
      live: "https://funime-media.netlify.app/",
      code: "https://github.com/AmishMishra11/funime",
    },
  ];

  return (
    <div className="bg-neutral-800 flex flex-col justify-start items-start w-full p-2">
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-[#6B4748] w-full text-left sm:pl-[8rem] md:pl-[12rem]">
        Projects
      </div>

      <div className="flex flex-wrap justify-between items-center p-[2rem] w-full">
        {project.map((item) => (
          <div className="flex flex-col md:flex-col  xl:flex-row justify-start items-start md:items-center xl:items-end pb-4 md:h-[30rem] xl:h-[20rem]">
            <img
              className="h-[18rem] md:w-[25rem] xl:w-[22rem] p-1 bg-primary border-1 border-[#F6BFC2] rounded-md "
              src={item.url}
              alt={item.name}
            />
            <div className="flex flex-col  justify-between items-start p-2 bg-primary rounded-md md:w-[27rem] md:h-[16rem] xl:w-[20rem]  xl:h-[14rem]   ">
              <div className="text-[2.25rem] font-body text-secondary ">
                {item.name}
              </div>
              <div className="text-[1.25rem] font-medium font-serif text-left">
                {item.description}
              </div>

              <div className="flex justify-start items-center">
                <a
                  className="p-2 m-2 rounded-full w-[5rem] text-center bg-secondary text-white border-2 border-[#6B4748]"
                  href={item.live}
                  target="_blank"
                >
                  Live
                </a>
                <a
                  className="p-2 m-2 rounded-full w-[5rem] text-center bg-primary text-secondary border-2 border-[#6B4748]"
                  href={item.code}
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
