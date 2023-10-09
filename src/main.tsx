// Libs
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

// App
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
