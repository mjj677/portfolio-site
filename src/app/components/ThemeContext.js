'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log('theme switched')
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
