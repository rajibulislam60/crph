import React from "react";
import Bubbling from "./propBubbling/bubbling";
import ContextApiTest from "./contextApi/ContextApiTest";
import ContextTheme from "./contextApi/ContextTheme";

const App = () => {
  return (
    <div>
      <Bubbling />
      <ContextApiTest />
      <ContextTheme/>
    </div>
  );
};

export default App;
