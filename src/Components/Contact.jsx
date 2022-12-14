import React from "react";

import Github from "../Assets/Socials/github.png";
import Linkdin from "../Assets/Socials/linkdin.png";
import Mail from "../Assets/Socials/mail.png";
import Twitter from "../Assets/Socials/twitter.png";

function Contact() {
  return (
    <div className="bg-neutral-800 flex flex-col justify-start items-start w-full p-5">
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-[#6B4748] w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        Contact
      </div>

      <div className="flex justify-center items-center w-full">
        <a href="https://github.com/AmishMishra11" target="_blank">
          <img className="h-36 w-36" src={Github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/amish-mishra-98b43221a/"
          target="_blank"
        >
          <img className="h-36 w-36" src={Linkdin} alt="Linkdin" />
        </a>
        <a href="mailto: amishmishra11@gmail.com" target="_blank">
          <img className="h-36 w-36" src={Mail} alt="Mail" />
        </a>
        <a href="https://twitter.com/The_Scarcastic1" target="_blank">
          <img className="h-36 w-36" src={Twitter} alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
