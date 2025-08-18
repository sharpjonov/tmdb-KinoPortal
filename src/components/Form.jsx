import { FaFlagUsa } from "react-icons/fa";
import React, { useContext, useRef, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { API_KEY, baseURL } from "../API/api";
import axios from "axios";
import { lang } from "../lang/lang";
// import "../sass/custom.sass";

const Form = ({ til, setTil }) => {
  const { mode, modeFunction } = useContext(ThemeContext);

  return (
    <form>
      <div className="d-flex align-items-center gap-3">
        <div className="input-group">
          <input
            id="Form-search"
            type="search"
            placeholder=""
            className={`form-control ${
              mode ? "bg-dark text-light" : "bg-light"
            } `}
          />
          <button id="Form-button" className="btn btn-outline-secondary">
            {lang[til].header.searchBtn}
          </button>
        </div>
        <button
          type="button"
          onClick={modeFunction}
          className={`${mode ? "btn btn-light" : "btn btn-dark border"}`}
        >
          {`${mode ? lang[til].header.themeLight : lang[til].header.themeDark}`}
        </button>
        <select
          onChange={(e) => setTil(e.target.value)}
          className="form-select w-25"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
          <option value="es">ES</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
