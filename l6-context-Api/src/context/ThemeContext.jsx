import React, { createContext } from "react";
import { useState } from "react";

export const ThemContext = createContext();
const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light");

  const changeButtonTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <ThemContext.Provider value={{ theme, changeButtonTheme }}>
        {props.children}
      </ThemContext.Provider>
    </div>
  );
};

export default ThemeContext;
