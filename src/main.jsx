import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./hooks/ThemeContext";
import WebRoute from "./routes/WebRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <WebRoute />
    </ThemeProvider>
  </React.StrictMode>
);
