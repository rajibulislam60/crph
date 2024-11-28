import React from "react";

const bubbling = () => {
  let handlePerant = (event) => {
    console.log("event of perant: ", event);
  };
  let handleSubmit = (event) => {
    event.stopPropagation();
    console.log("event of child: ", event);
  };
  return (
    <div onClick={handlePerant} className="bg-slate-200 py-10 px-10">
      <button
        onClick={handleSubmit}
        className="border bg-teal-100 rounded-md px-5 py-3"
      >
        Submit
      </button>
    </div>
  );
};

export default bubbling;
