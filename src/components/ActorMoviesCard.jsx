import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { baseImg } from "../API/api";
import ThemeContext from "../context/ThemeContext";

const ActorMoviesCard = ({
  title,
  img,
  vote_average,
  release_date,
  character,
  id,
}) => {
  const { mode } = useContext(ThemeContext);

  if (!id || !img) return null;

  return (
    <li className="list-unstyled col-md-3 col-sm-6 mb-4">
      <Link className="text-decoration-none" to={`/movie/details/${id}`}>
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
              Role: {character}
            </p>
            <small className="">{release_date}</small>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ActorMoviesCard;
