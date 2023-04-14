import React from "react";
import profile from "../assets/profile-square.jpg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Summary() {
  return (
    <div className="my-[5vh] md:my-[10vh] items-center justify-center text-center md:flex mx-16">
      <div>
        <h1 className="font-Comfortaa font-bold text-center text-xl  mb-2 md:hidden ">
          Reannu Instrella
        </h1>
        <h2 className="font-PublicSans font-bold mb-6 md:hidden ">
          Student Software Developer
        </h2>
      </div>

      <div>
        <div className="mx-auto h-40 w-40 md:h-80 md:w-80 bg-teal-500 bg-opacity-30 rounded-full flex items-center justify-center">
          <img
            src={profile}
            className="mx-auto rounded-full h-36 w-36 md:h-72 md:w-72"
            alt="Summary"
          />
        </div>
        <h1 className="font-Comfortaa font-bold text-center text-teal-900 max-md:hidden md:text-4xl  mt-8">
          Reannu Instrella
        </h1>
        <h2 className="max-md:hidden font-PublicSans font-bold mb-8">
          Student Software Developer
        </h2>
        <div className="max-md:hidden flex flex-row justify-around md:justify-evenly space-x-4">
          <a
            href="
            https://www.facebook.com/Reannu.Emmanuel.Lubiano.Instrella/"
          >
            <FaFacebook className="text-3xl text-teal-700 hover:text-opacity-50 transition-all" />
          </a>
          <a href="https://github.com/reannu123">
            <FaGithub className="text-3xl text-teal-900 hover:text-opacity-50 marker:transition-all" />
          </a>
          <a href="https://ph.linkedin.com/in/reannu-instrella-a64457139">
            <FaLinkedin className="text-3xl text-teal-500 hover:text-opacity-50 transition-all" />
          </a>
        </div>
      </div>
      <div>
        <p className="font-NanumMyeongjo text-sm md:text-base text-center md:ml-12 md:px-8 py-8 max-w-2xl">
          A motivated student developer with a passion for learning new
          technologies. Currently completing Bachelor's Degree in Computer
          Science at the University of the Philippines Diliman. Has experience
          in different languages such as JavaScript & TypeScript, Python, C,
          C++, C#, and Java. Has experience in different frameworks such as
          React, NodeJS, and Express as well as databases such as MongoDB and
          MySQL, and more.
        </p>
        <div className="md:hidden flex flex-row justify-around md:justify-evenly space-x-4">
          <a
            href="
            https://www.facebook.com/Reannu.Emmanuel.Lubiano.Instrella/"
          >
            <FaFacebook className="text-3xl text-teal-700 hover:text-opacity-50 transition-all" />
          </a>
          <a href="https://github.com/reannu123">
            <FaGithub className="text-3xl text-teal-900 hover:text-opacity-50 marker:transition-all" />
          </a>
          <a href="https://ph.linkedin.com/in/reannu-instrella-a64457139">
            <FaLinkedin className="text-3xl text-teal-500 hover:text-opacity-50 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Summary;