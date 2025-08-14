import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
// import "../sass/custom.sass";

const Form = () => {
  const { mode, modeFunction } = useContext(ThemeContext);

  return (
    <form>
      <div className="d-flex align-items-center gap-3">
        <div className="input-group">
          <input
            type="search"
            placeholder="Search..."
            className={`form-control ${mode ? "bg-dark" : "bg-light"} `}
          />
          <button className="btn btn-outline-secondary">search</button>
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
