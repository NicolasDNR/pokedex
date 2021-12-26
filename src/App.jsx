import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";

import { Pokedex, PokedexFav, PokedexType, Pokemon } from "./container";

import "./App.css";
import "./Styles/style.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/types" element={<PokedexType />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />  
          <Route path="/favorites" element={<PokedexFav />} /> 
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;