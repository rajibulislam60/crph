import React from "react";
import Bubbling from "./propBubbling/bubbling";
import ContextApiTest from "./contextApi/ContextApiTest";
import ContextTheme from "./contextApi/ContextTheme";
import TestApi from "./singlepageContextApi/TestApi";


const App = () => {
  return (
    <div>
      <Bubbling />
      <ContextApiTest />
      <ContextTheme/>
      <TestApi/>
    </div>
  );
};

export default App;
