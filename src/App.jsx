import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Pokedex from "./container/Pokedex.jsx";
import PokedexType from "./container/PokedexType.jsx";

import "./App.css";

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
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/types" element={<PokedexType />} />
        </Routes>
      </div>
    );
  }
}

export default App;
