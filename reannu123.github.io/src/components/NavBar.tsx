import React from "react";
import Summary from "./Summary";

import Skills from "./Skills";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Projects from "./Projects";

function NavBar(props: any) {
  return (
    <header className="sticky bg-cyan-100  top-0  flex ">
      <nav className=" w-screen flex items-center justify-between p-4 ">
        <div className=" flex flex-row space-x-8 items-center justify-center mx-8 whitespace-nowrap">
          <a href="https://github.com/reannu123">
            <img
              src="https://avatars.githubusercontent.com/u/54865395?s=400&v=4"
              className="h-8 w-8 rounded-full "
            />
          </a>
          <span className="self-center font-bold text-xl md:text-2xl lg:text-4xl font-mono w-auto sm:text-center">
            Reannu Instrella
          </span>
        </div>

        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-row max-md:hidden space-x-8 items-center justify-between mx-8 mt-0">
            <li>
              <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white  hover:cursor-pointer transition-all">
                <a href="#Summary">Summary</a>
              </div>
            </li>
            <li>
              <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                <a href="#Skills">Skills</a>
              </div>
            </li>
            <li>
              <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                <a href="#Education">Education</a>
              </div>
            </li>
            <li>
              <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                <a href="#Projects">Projects</a>
              </div>
            </li>
            <li>
              <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                <a href="#Others">Others</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
