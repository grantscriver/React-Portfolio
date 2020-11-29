import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.js";
import About from "./components/About/About"
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer.js";

function App() {
  document.body.style.backgroundColor = "#4b5d67";
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
