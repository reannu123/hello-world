import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkEnabled, setDarkEnabled] = useDarkMode();
  return (
    <div className="sh-screen w-full dark:bg-gray-950 transition-all duration-300">
      {/* Navbar */}
      <NavBar setDarkEnabled={setDarkEnabled} darkEnabled={darkEnabled} />
      {/* Main */}
      <div className="flex flex-col items-center justify-center dark:text-gray-100">
        <section
          id="Summary"
          className=" w-full min-h-[90vh] flex justify-center items-center text-center"
        >
          <Summary />
        </section>
        <section
          id="Skills"
          className="w-full min-h-[90vh] flex-col justify-center items-center text-center"
        >
          <Skills />
        </section>
        <section
          id="Education"
          className="w-full min-h-[90vh]  flex-col justify-center items-center text-center"
        >
          <Education />
        </section>
        <section
          id="Projects"
          className="w-full min-h-[90vh]  flex-col justify-center items-center text-center"
        >
          <Projects />
        </section>
        <section
          id="Others"
          className="w-full min-h-[90vh] flex-col justify-center items-center text-center"
        >
          <Hobbies />
        </section>
      </div>
    </div>
  );
}

export default App;
