import React from "react";

function Education() {
  return (
    <div className="my-auto items-center justify-center text-center md:flex mx-16">
      <div className="md:hidden mt-[5vh] mb-4">
        {/* mobile */}
        <h1 className="font-Comfortaa font-bold text-center text-3xl  mb-2 md:hidden text-teal-800 dark:text-teal-300 select-none">
          Education
        </h1>
      </div>

      <div>
        {/* desktop */}
        <h1 className="font-Comfortaa font-bold text-center text-teal-800 dark:text-teal-300 max-md:hidden md:text-[6vh] md:whitespace-nowrap lg:text-7xl mb-2 mt-4 lg:mb-4 lg:mt-8 lg:mx-[5vw] select-none drop-shadow-lg">
          Education
        </h1>
      </div>
      <div className="mb-[5vh] mt-4">
        <p className="text-center px-8 text-xl lg:text-4xl">
          Graduated Cum Laude from the University of the Philippines Diliman
          with a Bachelor's Degree in Computer Science and as a DOST-SEI Merit
          Scholar. <br />
        </p>
      </div>
    </div>
  );
}

export default Education;
