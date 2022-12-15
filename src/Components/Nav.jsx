import React, { useState } from "react";

import Logo from "../Assets/Logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

function Nav() {
  let [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Intro",
      url: "#intro",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Blogs",
      url: "#blogs",
    },
    {
      name: "About",
      url: "#about",
    },
  ];

  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-10">
      <div className="md:flex justify-between items-center  h-24  py-4 md:px-10 px-7 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div>
          <img className="h-16 w-16 ml-4 rounded-full" src={Logo} alt="Logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>
        <div
          className={`md:flex md:items-center md:pb-0  absolute md:static bg-gradient-to-r from-violet-500 to-fuchsia-500 md:from-transparent md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {menu.map((item) => (
            <div
              key={item.name}
              className="p-2 text-lg font-medium xl:ml-8 md:my-0 my-7"
              onClick={() => setOpen(false)}
            >
              <a href={item.url}>{item.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
