import React, { useState, useEffect } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("");

  //first execution gets value from localStorage if doesn't exists set to light
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setTheme("light");
  }, []);

  //store value in localstorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
