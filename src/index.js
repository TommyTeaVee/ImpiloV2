import React from "react";
import ReactDOM from "react-dom";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
