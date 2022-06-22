import React from "react";
import ReactDOM from "react-dom/client";
import ContextComponent from "./hooks/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextComponent />
  </React.StrictMode>
);
