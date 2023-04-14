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
    <div className="sh-screen w-full dark:bg-gray-950 dark:text-gray-200  transition-all duration-100">
      {/* Navbar */}
      <NavBar setDarkEnabled={setDarkEnabled} darkEnabled={darkEnabled} />
      {/* Main */}
      <div className="flex flex-col items-center justify-center">
        <section id="Summary" className="scroll-pt-36 w-full min-h-screen ">
          <Summary />
        </section>
        <section id="Skills" className="w-full min-h-screen  text-center">
          <Skills />
        </section>
        <section id="Education" className="w-full min-h-screen   text-center">
          <Education />
        </section>
        <section id="Projects" className="w-full min-h-screen   text-center">
          <Projects />
        </section>
        <section id="Others" className="w-full min-h-screen  text-center">
          <Hobbies />
        </section>
      </div>
    </div>
  );
}

export default App;
