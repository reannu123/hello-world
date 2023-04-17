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
        </p>
        <ul className="list-none list-inside">
          <li>NSNP Simulation</li>
          <li>BoredApp</li>
          <li>Trand Tracker</li>
          <li>Plannercord</li>
          <li>Color Lock</li>
          <li>Flappy Physics</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
