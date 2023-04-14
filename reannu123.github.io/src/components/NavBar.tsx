import React from "react";
import Summary from "./Summary";

import Skills from "./Skills";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Projects from "./Projects";

function NavBar(props: any) {
  return (
    <header className=" bg-gray-700  text-white top-0  flex mb-12">
      <nav className="flex-wrap w-full  flex items-center justify-between p-4 ">
        <div className=" flex flex-row space-x-4 items-center justify-center mx-4 whitespace-nowrap">
          <a href="https://github.com/reannu123">
            <img
              src="https://avatars.githubusercontent.com/u/54865395?s=400&v=4"
              className="min-h-[30px] min-w-[30px] max-h-8 max-w-8 rounded-full"
            />
          </a>
          <span className="font-medium text-2xl w-auto ">Reannu Instrella</span>
        </div>

        <div className=" hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-wrap  space-x-2 items-center justify-between mx-8 mt-0">
            <li>
              <a href="#Summary">
                <div className="block py-2 pl-3 pr-4 rounded transition-all duration-300 bg-gradient-to-l from-teal-400 to-teal-600    hover:text-gray-900  hover:cursor-pointer">
                  Summary
                </div>
              </a>
            </li>
            <li>
              <a href="#Skills">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-teal-500 hover:text-gray-700 hover:cursor-pointer transition-all">
                  Skills
                </div>
              </a>
            </li>
            <li>
              <a href="#Education">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-teal-500 hover:text-gray-700 hover:cursor-pointer transition-all">
                  Education
                </div>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-teal-500 hover:text-gray-700 hover:cursor-pointer transition-all">
                  Projects
                </div>
              </a>
            </li>
            <li>
              <a href="#Others">
                <div className="block py-2 pl-3 pr-4 rounded hover:bg-teal-500 hover:text-gray-700 hover:cursor-pointer transition-all">
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
