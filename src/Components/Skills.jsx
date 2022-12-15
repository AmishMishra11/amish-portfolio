import React from "react";

import Html from "../Assets/Skills/html.png";
import Css from "../Assets/Skills/css.png";
import JavaScript from "../Assets/Skills/javascript.png";
import ReactIcon from "../Assets/Skills/react.png";
import Git from "../Assets/Skills/git.png";
import Tailwind from "../Assets/Skills/tailwind.png";
import Redux from "../Assets/Skills/redux.png";
import Material from "../Assets/Skills/material-ui.png";
import Jest from "../Assets/Skills/jest.png";

function Skills() {
  const skill = [
    { name: "HTML", url: Html },
    { name: "CSS", url: Css },
    { name: "JavaScript", url: JavaScript },
    { name: "React", url: ReactIcon },
    { name: "Git", url: Git },
    { name: "Tailwind", url: Tailwind },
    { name: "Redux", url: Redux },
    { name: "Material UI", url: Material },
    { name: "Jest", url: Jest },
  ];

  return (
    <div
      id="skills"
      className="bg-backgroundLight flex flex-col justify-start items-start w-full p-5"
    >
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-border w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        Skills
      </div>

      <div className="flex flex-wrap justify-center items-center p-[2rem] w-full">
        {skill.map((item) => (
          <div
            key={item.name}
            className="flex justify-start items-center h-[5rem] w-[8rem] md:h-[4rem] md:w-[10rem] xl:h-[5rem] xl:w-[20rem] p-2 sm:ml-20"
          >
            <img
              className="h-[4.5rem] w-[4.5rem] p-2 "
              src={item.url}
              alt={item.name}
            />
            <div className="text-white text-[1.5rem]">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
