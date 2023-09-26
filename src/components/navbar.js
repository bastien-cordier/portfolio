import { useState } from "react";

const Navbar = () => {
  const Links = [
    { name: "About Me", link: "/#about-me" },
    { name: "Projects", link: "/#projects" },
  ];
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="top-0 bg-white dark:bg-[#161616]">
      <h1>BC.</h1>
    </nav>
  );
};

export default Navbar;
