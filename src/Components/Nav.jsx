import React from "react";

import Logo from "../Assets/Logo.png";

function Nav() {
  return (
    <div className="flex justify-between items-center p-2 h-24  bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div>
        <img className="h-16 w-16 ml-4" src={Logo} alt="Logo" />
      </div>
      <div className="flex">
        <div className="p-2 text-lg font-medium">Intro</div>
        <div className="p-2 text-lg font-medium">Skill</div>
        <div className="p-2 text-lg font-medium">Project</div>
        <div className="p-2 text-lg font-medium">Blogs</div>
        <div className="p-2 text-lg font-medium">About</div>
      </div>
    </div>
  );
}

export default Nav;
