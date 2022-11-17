import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextFunc from "./context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextFunc>
      <Router>
        <App />
      </Router>
    </ContextFunc>
  </React.StrictMode>
);
