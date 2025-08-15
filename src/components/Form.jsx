import React, { useContext, useRef, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { API_KEY, baseURL } from "../API/api";
import axios from "axios";
// import "../sass/custom.sass";

const Form = () => {
  const { mode, modeFunction } = useContext(ThemeContext);

  return (
    <form>
      <div className="d-flex align-items-center gap-3">
        <div className="input-group">
          <input
            id="Form-search"
            type="search"
            placeholder="Search..."
            className={`form-control ${
              mode ? "bg-dark text-light" : "bg-light"
            } `}
          />
          <button id="Form-button" className="btn btn-outline-secondary">
            search
          </button>
        </div>
        <button
          type="button"
          onClick={modeFunction}
          className={`${mode ? "btn btn-light" : "btn btn-dark border"}`}
        >
          {`${mode ? "Light" : "Dark"}`}
        </button>
      </div>
    </form>
  );
};

export default Form;
