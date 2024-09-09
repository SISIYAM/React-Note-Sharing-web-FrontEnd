import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./hooks/ThemeContext";
import WebRoute from "./routes/WebRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <WebRoute />
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
