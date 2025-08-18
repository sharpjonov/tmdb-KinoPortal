import React, { useContext, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Form from "./Form";
import ThemeContext from "../context/ThemeContext";
import { lang } from "../lang/lang";

const Header = () => {
  const [til, setTil] = useState(localStorage.getItem("lang") || "en");

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
          <div>
            <Link to="/">
              <img width={200} height={100} src={logo} alt="Logo" />
            </Link>
          </div>

          <ul
            id="header_list"
            className="m-0 p-0 list-unstyled d-flex align-items-center gap-3"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                to="/"
                style={{ fontSize: "14px" }}
              >
                {lang[til].header.homePage}
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
                style={{ fontSize: "14px" }}
              >
                {lang[til].header.popularPage}
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
                style={{ fontSize: "14px" }}
              >
                {lang[til].header.peoplePage}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                style={{ fontSize: "14px" }}
                to="/nowplaying"
              >
                {lang[til].header.nowplayingPage}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none ${
                    isActive ? "text-cinema" : mode ? "text-light" : "text-dark"
                  }`
                }
                to="/upcoming"
                style={{ fontSize: "14px" }}
              >
                {lang[til].header.upcomingPage}
              </NavLink>
            </li>
          </ul>
          <Form til={til} setTil={setTil} />
        </div>
      </div>
    </header>
  );
};

export default Header;
