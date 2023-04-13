import React from "react";
import Summary from "./Summary";

import Skills from "./Skills";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Projects from "./Projects";

function NavBar(props: any) {
  return (
    <header className="sticky bg-cyan-100  top-0  flex ">
      <nav className=" max-md:flex-col flex-wrap w-full  flex items-center justify-between p-4 ">
        <div className=" flex flex-row space-x-8 items-center justify-center mx-8 whitespace-nowrap">
          <a href="https://github.com/reannu123">
            <img
              src="https://avatars.githubusercontent.com/u/54865395?s=400&v=4"
              className="h-8 w-8 rounded-full"
            />
          </a>
          <span className="max-md:text-center font-bold text-2xl font-mono w-auto ">
            Reannu Instrella
          </span>
        </div>

        <div className=" w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-wrap  space-x-8 items-center justify-between mx-8 mt-0">
            <li>
              <a href="#Summary">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white  hover:cursor-pointer transition-all">
                  Summary
                </div>
              </a>
            </li>
            <li>
              <a href="#Skills">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                  Skills
                </div>
              </a>
            </li>
            <li>
              <a href="#Education">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                  Education
                </div>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                  Projects
                </div>
              </a>
            </li>
            <li>
              <a href="#Others">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-cyan-900 hover:text-white hover:cursor-pointer transition-all">
                  Others
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
