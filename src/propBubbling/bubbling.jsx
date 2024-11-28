import React, { useState } from "react";

const bubbling = () => {
  let [takeConsole, setTakeConsole] = useState([])
  let handleParent = (event) => {
    setTakeConsole((prev) => [...prev, `Event of parent: ${event}`]);
  };
  let handleSubmit = (event) => {
    event.stopPropagation();
    setTakeConsole((prev) => [...prev, `Event of child: ${event}`]);
  };
  return (
    <>
    <div onClick={handleParent} className="bg-slate-200 py-10 px-10">
      <p>Just click and try</p>
      <button
        onClick={handleSubmit}
        className="border bg-teal-100 rounded-md px-5 py-3"
      >
        Submit
      </button>
      
    </div>
    {takeConsole.map((item)=>(
        <p>{item}</p>
      ))}
    </>
    
  );
};

export default bubbling;
