import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
