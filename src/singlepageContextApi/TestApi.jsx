import React, { useContext } from "react";
import { ThemeContext } from "./SContextApi";

const TestApi = () => {
  let { theme, setTheme } = useContext(ThemeContext);

  let handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="mt-10 px-10">
      <p
        className={
          theme === "light" ? "bg-white text-black py-3" : "bg-black text-white py-3"
        }
      >
        Test context API: {theme}
      </p>
      <button onClick={handleTheme} className="border px-3 py-1">Test Btn</button>
    </div>
  );
};

export default TestApi;
