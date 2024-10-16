// App.js
import React, { useState, useEffect } from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out bg-rotated ${
        darkMode
          ? "bg-[#111827] m-auto text-[#959595]"
          : "bg-gray-200 text-gray-900"
      }`}
    >
      <div className="mt-20">
        {" "}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="max-w-7xl m-auto">
        <main className="pt-14">
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="tools">
            <Tools />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
