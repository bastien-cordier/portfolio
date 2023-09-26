import { useEffect, useState } from "react";
import SwitchDarkMode from "./darkMode.js";

const Navbar = () => {
  const Links = [
    { name: "About Me", link: "/#about-me" },
    { name: "Projects", link: "/#projects" },
  ];
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heightNav = scrollY > 100 ? "py-4" : "py-6";

  return (
    <nav className="top-0 left-0 right-0 fixed bg-white dark:bg-dark text-dark dark:text-white z-10">
      <div
        className={`md:flex items-center justify-between ${heightNav} md:px-10 px-7 ease-in-out duration-300`}
      >
        <div className="text-4xl title">
          <a href="/">
            <h1>BC.</h1>
          </a>
        </div>

        <ul className="flex">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-neutral-900 dark:text-white duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 md:my-0 my-7 hidden md:block">
            <SwitchDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
