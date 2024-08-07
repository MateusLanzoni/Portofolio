import React from "react";
import './components/NavBar/navbar.css';
import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
