import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

const ContextApiTest = () => {
  let [test, setTest] = useState("");
  let { name, setName } = useContext(UserContext);
  //   let { theme, setTheme } = useContext(UserContext);

  let handleInput = (e) => {
    setTest(e.target.value);
  };

  let handleAdd = () => {
    setName(test);
    setTest("");
  };

  //   let toggleTheme=()=>{
  //     setTheme(theme==="light"?"dark":"light")
  //   }
  return (
    <div>
      <div className="py-3 flex items-center gap-2">
        <input
          onChange={handleInput}
          className="border text-[30px]"
          value={test}
          type="text"
          placeholder="Enter your name"
        />
        <button onClick={handleAdd} className="border px-5 py-3">
          Add
        </button>
        <div className="ml-4 text-[20px]">Current user name: {name}</div>
      </div>
      {/* <div>
        <p
          className={
            theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
          }
        >
          Current Theme: {theme}
        </p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div> */}
    </div>
  );
};

export default ContextApiTest;
