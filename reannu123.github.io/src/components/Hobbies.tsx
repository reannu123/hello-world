import React from "react";

function Hobbies() {
  return (
    <>
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl w-auto sm:text-center">
        Hobbies
      </h1>
      <p className="text-center px-8">My hobbies include:</p>
      <ul className="list-disc list-inside">
        <li>Reading</li>
        <li>Watching Anime</li>
        <li>Playing Video Games</li>
        <li>Listening to Music</li>
        <li>Watching Movies</li>
      </ul>
    </>
  );
}

export default Hobbies;
