// App.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
