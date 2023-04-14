import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(<Summary />);
  return (
    <div className="sh-screen w-full ">
      {/* Navbar */}
      <NavBar setCurrentScreen={setCurrentScreen} />
      {/* Main */}
      <div className="flex flex-col items-center justify-center">
        <section id="Summary" className="scroll-pt-36 w-full h-auto">
          <Summary />
        </section>
        <section id="Skills" className="w-full h-screen text-center">
          <Skills />
        </section>
        <section id="Education" className="w-full h-screen text-center">
          <Education />
        </section>
        <section id="Projects" className="w-full h-screen text-center">
          <Projects />
        </section>
        <section id="Others" className="w-full h-screen text-center">
          <Hobbies />
        </section>
      </div>
    </div>
  );
}

export default App;
