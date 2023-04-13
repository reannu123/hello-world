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
    <div className="sh-screen w-screen">
      {/* Navbar */}
      <NavBar setCurrentScreen={setCurrentScreen} />
      {/* Main */}
      <div className="flex flex-col items-center justify-center">
        <section id="Summary" className="h-auto bg-cyan-600">
          <Summary />
        </section>
        <section id="Skills" className="w-screen h-screen bg-cyan-500">
          <Skills />
        </section>
        <section id="Education" className="w-screen h-screen bg-cyan-400">
          <Education />
        </section>
        <section id="Projects" className="w-screen h-screen bg-cyan-300">
          <Projects />
        </section>
        <section id="Others" className="w-screen h-screen bg-cyan-300">
          <Hobbies />
        </section>
      </div>
    </div>
  );
}

export default App;
