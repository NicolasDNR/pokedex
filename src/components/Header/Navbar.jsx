import { NavLink } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
    return (
        <>
        <header>
          <nav className="nav__link">
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
        </>
    )
}

export default Navbar;