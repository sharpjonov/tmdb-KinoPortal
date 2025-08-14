import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-wrapper d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>

      <div className="content position-relative">
        <h1 className="display-1 fw-bold text-danger shadow-text">404</h1>
        <h2 className="fw-bold fs-3 mt-3 text-light">
          Упс! Страница не найдена 🎬
        </h2>
        <p className="text-light mt-3 mx-auto" style={{ maxWidth: "500px" }}>
          Похоже, вы попали на съёмочную площадку, где ещё не сняли нужный
          фильм. Вернёмся в кинотеатр?
        </p>
        <Link to="/" className="btn btn-danger btn-lg mt-4 shadow">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
