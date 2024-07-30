import React, { createContext, useState, useEffect } from "react";

// Create the Theme Context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme in localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    return savedTheme;
  });

  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.setAttribute("data-bs-theme", theme);
    // Save the theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
