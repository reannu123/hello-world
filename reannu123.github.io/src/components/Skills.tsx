import React from "react";
import profile from "../assets/profile-square.jpg";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SkillTable from "./Skills/SkillTable";
function Skills() {
  return (
    <div className="my-auto items-center justify-center text-center md:flex mx-16">
      <div className="md:hidden mt-[5vh] mb-4">
        {/* mobile */}
        <h1 className="font-Comfortaa font-bold text-center text-3xl  mb-2 md:hidden text-teal-800 dark:text-teal-300 select-none drop-shadow-lg">
          Skills
        </h1>
      </div>

      <div>
        {/* desktop */}
        <h1 className="font-Comfortaa font-bold text-center text-teal-800 dark:text-teal-300 max-md:hidden md:text-[6vh] md:whitespace-nowrap lg:text-8xl mb-2 mt-4 lg:mb-4 lg:mt-8 lg:mx-[5vw] select-none drop-shadow-lg">
          Skills
        </h1>
      </div>
      <div className="mb-[5vh] mt-4">
        <SkillTable />
      </div>
    </div>
  );
}

export default Skills;
