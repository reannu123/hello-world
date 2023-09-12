import React from "react";

function Projects() {
  return (
    <div className="my-auto items-center justify-center text-center md:flex mx-16">
      <div className="md:hidden mt-[5vh] mb-4">
        {/* mobile */}
        <h1 className="font-Comfortaa font-bold text-center text-3xl  mb-2 md:hidden text-teal-800 dark:text-teal-300 select-none">
          Projects
        </h1>
      </div>

      <div>
        {/* desktop */}
        <h1 className="font-Comfortaa font-bold text-center text-teal-800 dark:text-teal-300 max-md:hidden md:text-[6vh] md:whitespace-nowrap lg:text-7xl mb-2 mt-4 lg:mb-4 lg:mt-8 lg:mx-[5vw] select-none">
          Projects
        </h1>
      </div>
      <div className="mb-[5vh] mt-4">
        <p className="text-center px-8">
          Some of my development projects include:
        </p>{" "}
        <a
          href={"https://nsnp.snapse.website"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          NSNP Simulator
        </a>
        <a
          href={"https://reannuinstrella.me/rps-firebase/"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          Rock Paper Scissors!
        </a>
        <a
          href={"https://reannuinstrella.me/BoredApp/"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          BoredApp
        </a>
        <a
          href={"https://github.com/reannu123/TrendTracker-frontend"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          TrendTracker
        </a>
        <a
          href={"https://github.com/Plannercord-Bot/Plannercord-Bot"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          Plannercord
        </a>
        <a
          href={"https://github.com/reannu123/FlappyPhysics"}
          target="_blank"
          rel="noreferrer"
          className=" font-Comfortaa my-4 text-xl text-white flex flex-col items-center justify-center mx-1 my-1 p-1 bg-teal-700 rounded-3xl h-16 w-auto hover:scale-150 hover:bg-teal-500 transition-all shadow-xl"
        >
          Flappy Physics
        </a>
      </div>
    </div>
  );
}

export default Projects;
