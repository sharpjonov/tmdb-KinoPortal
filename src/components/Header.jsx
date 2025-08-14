import React, { useContext } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import Form from "./Form";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <header
      className={` ${
        mode
          ? "bg-dark text-light"
          : "bg-light text-dark border-bottom border-2"
      }`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div>
            <img width={200} height={100} src={logo} alt="Logo" />
          </div>

          {/* Navigation */}
          <ul className="m-0 p-0 list-unstyled d-flex align-items-center gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                to="/popular"
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                to="/people"
              >
                People
              </NavLink>
            </li>
          </ul>
          <Form />
        </div>
      </div>
    </header>
  );
};

export default Header;
