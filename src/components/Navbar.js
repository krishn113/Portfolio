import React, { useEffect, useState , useContext } from 'react';
import logo from '../assets/logo.png';
import { GoSun } from "react-icons/go";
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full px-5 lg:px-8 py-4 flex justify-between items-center z-50 transition-all duration-200 text-lg ${
        scrolled
          ? "bg-white bg-opacity-50 border-b dark:bg-[#130136]"
          : ""
      }`}
    >
      <img src={logo} alt="Logo" className="h-12 cursor-pointer mr-14" />
      <ul className={`hidden font-serif md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
        scrolled
          ? ""
          : "bg-white bg-opacity-50 dark:bg-transparent"
      }`}>
        <li>
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </li>
      </ul>
      <button className="hover:text-gray-500" onClick={toggleTheme}>
        <GoSun size={28} />
      </button>
    </nav>
  );
};

export default Navbar;
