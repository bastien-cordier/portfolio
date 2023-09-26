import { useState, useEffect } from "react";
import "../styles/darkMode.scss";

function SwitchDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (localStorage) {
      return localStorage.getItem("theme");
    }
    return "dark";
  });

  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={switchTheme}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default SwitchDarkMode;
