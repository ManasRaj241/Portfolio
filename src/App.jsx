import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CodingProfiles from "./components/CodingProfiles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="bg-slate-800 text-white">
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <CodingProfiles />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
