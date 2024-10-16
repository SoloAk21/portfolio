import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import NavLinks from "../components/NavLinks";
import MobileMenu from "../components/MobileMenu";

const Header = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for mobile menu

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-1 pb-2 shadow-md z-50 transition-all ">
      <div className="flex items-center px-4 pb-1 divide-x gap-3 divide-gray-500">
        <LanguageSwitcher />
        <button onClick={() => setDarkMode(!darkMode)} className="pl-2">
          {darkMode ? (
            <MdLightMode className="icon text-primary" />
          ) : (
            <IoMdMoon className="icon text-primary" />
          )}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-4">
        <img src="assets/images/soloak.png" width={48} alt="SoloAk" />

        <NavLinks />
        <div className="flex space-x-4">
          <a href="#contact" className="btn  hidden md:block">
            {t("hireMe")}
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center px-4">
        <div onClick={toggleMenu} className="cursor-pointer">
          <RiMenu2Fill className="icon" />
        </div>
        <img src="assets/images/soloak.png" width={40} alt="SoloAk" />
        <div>
          <a href="#contact" className="btn ">
            {t("hireMe")}
          </a>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-opacity-90 z-40 ${
          darkMode ? "bg-gray-800 text-slate-200" : "bg-slate-200 text-gray-800"
        }`}
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.7s ease-in-out",
        }}
      >
        <div ref={menuRef}>
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            darkMode={darkMode} // Pass darkMode state
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
