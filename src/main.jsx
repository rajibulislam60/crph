import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./contextApi/ContextProvider.jsx";
import { SContextApi } from "./singlepageContextApi/SContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <SContextApi>
        <App />
      </SContextApi>
      
    </ContextProvider>
  </StrictMode>
);
