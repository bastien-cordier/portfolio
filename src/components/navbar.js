import React, { useEffect, useState } from "react";
import SwitchDarkMode from "./darkMode.js";
import useSectionIntersection from "./useSectionIntersection.js";
import "../styles/navbar.scss";

const Links = [
  { name: "Home", slug: "#intro" },
  { name: "About Me", slug: "#about-me" },
  { name: "Projects", slug: "#projects" },
];

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const activeSection = useSectionIntersection(Links);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const menuIcon = menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="w-6 h-6 dark:stroke-white stroke-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="w-6 h-6 dark:stroke-white stroke-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <nav className="top-0 left-0 right-0 fixed z-50">
      <div
        className={`md:flex items-center justify-between py-6 ${
          scrollY > 100 ? "md:py-4" : "md:py-6"
        } md:px-10 px-7 ease-in-out duration-300 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white md:shadow-lg`}
      >
        <div className="text-4xl title flex justify-between">
          <a href="/">
            <h1>BC.</h1>
          </a>
          <div className="md:hidden flex items-center">
            <span className="mr-3">
              <SwitchDarkMode
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </span>
            <button className="menu-icon" onClick={toggleMenu}>
              {menuIcon}
            </button>
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-5 left-0 absolute md:static bg-white dark:bg-neutral-900 z-[-1] text-neutral-900 dark:text-white md:z-auto shadow-lg dark:shadow-none md:shadow-none w-full md:w-auto md:pl-0 pl-9 transition-all ease-in-out duration-300 ${
            menuOpen ? "top-[88px] " : "top-[-200px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={link.name}
              className={`md:ml-8 my-4 md:my-0 text-xl nav-link`}
            >
              <a
                href={link.slug}
                className={
                  activeSection === link.slug.slice(1) // Remove the leading "/"
                    ? "text-neutral-900 dark:text-white opacity-100" // Apply opacity 100 when active
                    : "text-neutral-900 dark:text-white opacity-50"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 md:my-0 my-7 hidden md:block">
            <SwitchDarkMode
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
