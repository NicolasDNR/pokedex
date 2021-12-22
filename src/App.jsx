import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Pokedex from "./container/Pokedex.jsx";
import PokedexType from "./container/PokedexType.jsx";
import Pokemon from "./container/Pokemon";

import "./App.css";
import Formulaire from "./container/Formulaire.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Pokedex
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/types"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Types
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/types" element={<PokedexType />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/contact" element={<Formulaire />} />
        </Routes>
      </div>
    );
  }
}

export default App;
