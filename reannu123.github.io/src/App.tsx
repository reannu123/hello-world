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
    <div className="w-full dark:bg-gray-900 transition-all">
      {/* Navbar */}
      <NavBar setDarkEnabled={setDarkEnabled} darkEnabled={darkEnabled} />
      {/* Main */}
      <div className="flex flex-col items-center justify-center dark:text-gray-100">
        <section
          id="Summary"
          className=" w-full min-h-[85vh] md:min-h-[90vh] flex justify-center items-center text-center  dark:bg-gray-800 transition "
        >
          <Summary />
        </section>

        <div className="w-full h-[10vh] bg-gray-100 dark:bg-gray-900 transition" />

        <section
          id="Skills"
          className="w-full min-h-[85vh] md:min-h-[90vh]  flex justify-center items-center text-center  dark:bg-gray-800 transition"
        >
          <Skills />
        </section>

        <div className="w-full h-[10vh] bg-gray-100 dark:bg-gray-900 transition" />

        <section
          id="Education"
          className="w-full min-h-[85vh] md:min-h-[90vh]  flex justify-center items-center text-center  dark:bg-gray-800 transition"
        >
          <Education />
        </section>

        <div className="w-full h-[10vh] bg-gray-100 dark:bg-gray-900 transition" />

        <section
          id="Projects"
          className="w-full min-h-[85vh] md:min-h-[90vh]  flex justify-center items-center text-center  dark:bg-gray-800 transition"
        >
          <Projects />
        </section>

        <div className="w-full h-[10vh] bg-gray-100 dark:bg-gray-900 transition" />

        {/* <section
          id="Others"
          className="w-full min-h-[85vh] md:min-h-[90vh] mb-[10vh] flex justify-center items-center text-center  dark:bg-gray-800 transition"
        >
          <Hobbies />
        </section> */}
      </div>
    </div>
  );
}

export default App;
