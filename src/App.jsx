import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";

import { Pokedex, PokedexType, Pokemon } from "./container";

import "./App.css";
import "./styles/style.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/types" element={<PokedexType />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />   
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;