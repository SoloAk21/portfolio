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
      {" "}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-7xl m-auto">
        {/* Header component */}

        {/* Instead of padding-top: 16, apply margin to separate content */}
        <main className="mt-20">
          {" "}
          {/* Adjust margin-top here */}
          <HeroSection />
          <Tools />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>{" "}
      <Footer />
    </div>
  );
}
