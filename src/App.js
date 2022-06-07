//import React from "react";
//import logo from './logo.svg';
import './App.css';
import About from "../src/components/About/index";
import Nav from "../src/components/Nav/index";
import Gallery from "../src/components/Gallery/index";

function App() {
  return(
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
