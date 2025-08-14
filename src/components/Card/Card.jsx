import React, { useContext } from "react";
import { baseImg } from "../../API/api";
import "./Card.css";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Card = ({
  title,
  img,
  vote_average,
  release_date,
  original_title,
  id,
}) => {
  const { mode } = useContext(ThemeContext);

  return (
    <li className="list-unstyled col-md-3 col-sm-6 mb-4">
      <Link className="text-decoration-none" to={`/popular/${id}`}>
        <div
          className={`card h-100 border-0 shadow-sm ${
            mode ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <div className="position-relative">
            <img
              src={baseImg + img}
              className="card-img-top rounded-top"
              alt={title}
            />
            <span
              className="badge position-absolute start-0 translate-middle-y d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: "45px",
                height: "45px",
                bottom: "-45px",
                backgroundColor: mode ? "#212529" : "#fff",
                border: `3px solid ${
                  vote_average >= 8.0
                    ? "purple"
                    : vote_average >= 7.0
                    ? "green"
                    : "red"
                }`,
                color: mode ? "white" : "black",
              }}
            >
              {Math.round(vote_average * 10)}%
            </span>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold text-truncate" title={title}>
              {title}
            </h5>
            <p className={`mb-1 ${mode ? "text-light" : "text-muted"}`}>
              {original_title}
            </p>
            <small className="">{release_date}</small>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
