import React, { Component } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Pokedex from "./container/Pokedex.jsx";

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
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </div>
    );
  }
}

export default App;
