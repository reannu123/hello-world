import React from "react";
import Summary from "./Summary";

import Skills from "./Skills";
import Education from "./Education";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
// import darkmode icon from react-icons
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar(props: any) {
  return (
    <header className=" sticky bg-gray-100 dark:bg-gray-900 top-0  flex select-none h-16 md:h-[10vh] min-h-[4rem] max-h-[10vh] transition z-10">
      <nav className="flex-wrap w-full  flex items-center justify-between p-2 ">
        <a href="https://github.com/reannu123">
          <div className=" flex flex-row space-x-4 items-center justify-center mx-4 whitespace-nowrap">
            <div className="mx-auto h-10 w-10 bg-teal-500 bg-opacity-30 dark:bg-opacity-100 rounded-full flex items-center justify-center transition">
              <img
                src="https://avatars.githubusercontent.com/u/54865395?s=400&v=4"
                className="min-h-[30px] min-w-[30px] max-h-8 max-w-8 rounded-full"
              />
            </div>
            <span className="font-medium font-Comfortaa text-base md:text-xl lg:text-2xl w-auto dark:text-gray-100">
              Reannu Instrella
            </span>
          </div>
        </a>

        <div className=" hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-wrap  items-center justify-between mx-8 md:space-x-3 text-sm lg:text-xl lg:space-x-3">
            <li>
              <a
                href="src/assets/Reannu_Instrella_Resume.pdf"
                download={"Reannu_Instrella_Resume"}
              >
                <div className="block py-2  px-3 rounded-lg  bg-gradient-to-l from-teal-300 via-teal-500 to-teal-600  bg-size-200 hover:bg-right hover:text-gray-900  hover:cursor-pointer  dark:text-gray-100 dark:hover:text-gray-900 transition-all ">
                  Resume
                </div>
              </a>
            </li>
            <li>
              <a href="#Summary">
                <div className="block py-2  px-3  rounded-lg hover:bg-teal-500  hover:text-gray-700 hover:cursor-pointer dark:text-gray-100 transition dark:hover:text-gray-900 ">
                  Summary
                </div>
              </a>
            </li>
            <li>
              <a href="#Skills">
                <div className="block py-2  px-3  rounded-lg hover:bg-teal-500  hover:text-gray-700 hover:cursor-pointer dark:text-gray-100 transition dark:hover:text-gray-900 ">
                  Skills
                </div>
              </a>
            </li>
            <li>
              <a href="#Education">
                <div className="block py-2  px-3  rounded-lg hover:bg-teal-500  hover:text-gray-700 hover:cursor-pointer  dark:text-gray-100 transition dark:hover:text-gray-900 ">
                  Education
                </div>
              </a>
            </li>
            <li>
              <a href="#Projects">
                <div className="block py-2  px-3  rounded-lg hover:bg-teal-500  hover:text-gray-700 hover:cursor-pointer  dark:text-gray-100 transition dark:hover:text-gray-900 ">
                  Projects
                </div>
              </a>
            </li>
            {/* <li>
              <a href="#Others">
                <div className="block py-2 px-2 mx-1 rounded-lg hover:bg-teal-500  hover:text-gray-700 hover:cursor-pointer hover:transition-all">
                  Others
                </div>
              </a>
            </li> */}
            <li>
              <div className="ml-5">
                {props.darkEnabled ? (
                  <FaSun
                    className="text-xl md:text-2xl text-yellow-100  cursor-pointer hover:text-orange-300 transition"
                    onClick={() => props.setDarkEnabled(false)}
                  />
                ) : (
                  <FaMoon
                    className="text-xl md:text-2xl text-blue-950 cursor-pointer hover:text-blue-400 transition"
                    onClick={() => props.setDarkEnabled(true)}
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <a
          href="src/assets/Reannu_Instrella_Resume.pdf"
          download={"Reannu_Instrella_Resume"}
        >
          <div className="md:hidden mx-4 block py-2  px-3 rounded-lg  bg-gradient-to-l from-teal-300 via-teal-500 to-teal-600  bg-size-200 hover:bg-right hover:text-gray-900  hover:cursor-pointer  dark:text-gray-100 dark:hover:text-gray-900 transition-all ">
            Resume
          </div>
        </a>
        <div className=" md:hidden mx-4">
          {props.darkEnabled ? (
            <FaSun
              className="text-xl md:text-2xl text-yellow-100  cursor-pointer hover:text-orange-300 transition"
              onClick={() => props.setDarkEnabled(false)}
            />
          ) : (
            <FaMoon
              className="text-xl md:text-2xl text-blue-950 cursor-pointer hover:text-blue-400 transition"
              onClick={() => props.setDarkEnabled(true)}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
