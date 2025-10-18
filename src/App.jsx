import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="bg-slate-800 text-white">
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <Projects />
        <CodingProfiles />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
