// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
