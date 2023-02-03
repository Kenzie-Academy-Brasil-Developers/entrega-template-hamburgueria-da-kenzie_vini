import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Reset } from "./style/reset";
import { GlobalStyle } from "./style/globlaStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
