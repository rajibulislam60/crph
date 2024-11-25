import React, { useContext } from 'react'
import UserContext from './UserContext';

const ContextTheme = () => {
    let { theme, setTheme } = useContext(UserContext);

    let toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  return (
    <div>
      <p
        className={
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }
      >
        Current Theme: {theme}
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ContextTheme