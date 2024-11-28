import React, { createContext, useState } from 'react'
const ThemeContext = createContext();

const SContextApi = ({ children }) => {
    let [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export {SContextApi, ThemeContext}
