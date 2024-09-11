import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CodingProfiles from "./components/CodingProfiles";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="bg-slate-800 text-white">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <CodingProfiles />
        <Resume />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
