import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import WebRoute from "./routes/WebRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WebRoute />
    </ThemeProvider>
  </React.StrictMode>
);
