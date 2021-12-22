import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Pokedex from "./container/Pokedex.jsx";
import PokedexType from "./container/PokedexType.jsx";
import Pokemon from "./container/Pokemon";
import Formulaire from "./container/Formulaire.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/types" element={<PokedexType />} />
          <Route path="/contact" element={<Formulaire />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />   
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;