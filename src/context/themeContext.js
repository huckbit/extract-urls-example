import React, { useState, useEffect } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const localThemeSetting = window.localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(localThemeSetting);

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
