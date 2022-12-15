import React from "react";

import Github from "../Assets/Socials/github.png";
import Linkdin from "../Assets/Socials/linkdin.png";
import Mail from "../Assets/Socials/mail.png";
import Twitter from "../Assets/Socials/twitter.png";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-backgroundLight flex flex-col justify-start items-start w-full p-5">
      <div className="text-primary font-head text-[3.75rem] border-b-4 border-[#6B4748] w-full text-left md:pl-[8rem] xl:pl-[12rem]">
        Contact
      </div>

      <div className="flex justify-center items-center w-full">
        <a
          href="https://www.linkedin.com/in/amish-mishra-98b43221a/"
          target="_blank"
        >
          <BsLinkedin className="  h-16 w-16  sm:h-20 sm:w-20 md:h-28 md:w-28 md:m-4 m-1  text-border p-[.5rem] md:p-[1rem] hover:p-[1.5rem]" />
        </a>
        <a href="https://twitter.com/The_Scarcastic1" target="_blank">
          <FaTwitterSquare className="  h-16 w-16  sm:h-20 sm:w-20 md:h-28 md:w-28 md:m-4 m-1  text-border p-[.5rem] md:p-[1rem] hover:p-[1.5rem]" />
        </a>
        <a href="https://github.com/AmishMishra11" target="_blank">
          <FaGithubSquare className="  h-16 w-16  sm:h-20 sm:w-20 md:h-28 md:w-28 md:m-4 m-1  text-border p-[.5rem] md:p-[1rem] hover:p-[1.5rem]" />
        </a>
        <a href="mailto: amishmishra11@gmail.com" target="_blank">
          <HiMail className="  h-16 w-16  sm:h-20 sm:w-20 md:h-28 md:w-28 md:m-4 m-1  text-border p-[.5rem] md:p-[1rem] hover:p-[1.5rem]" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
