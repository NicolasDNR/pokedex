import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer, Modal } from "./components";

import { Pokedex, PokedexType, Pokemon } from "./container";

import "./App.css";
import "./Styles/style.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal />
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