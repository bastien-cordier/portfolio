import React from "react";
import "../styles/darkMode.scss";

function SwitchDarkMode({ darkMode, toggleDarkMode }) {
  const switchTheme = () => {
    toggleDarkMode();
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={switchTheme} checked={darkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default SwitchDarkMode;
