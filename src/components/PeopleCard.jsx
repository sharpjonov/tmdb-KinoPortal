import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { baseBackdrop } from "../API/api";
import { Skeleton } from "antd";

const PeopleCard = ({ id, img, name, character }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <li className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Link
        to={`/actors/info/${id}`}
        className="text-decoration-none text-reset"
      >
        <div
          className={`card h-100 text-center shadow-lg border-0 ${
            mode ? "bg-dark text-light" : "bg-white text-dark"
          }`}
        >
          <div className="card-body d-flex flex-column align-items-center">
            {img ? (
              <img
                src={baseBackdrop + img}
                alt={name}
                className="rounded-circle mb-3 img-fluid shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            ) : (
              <Skeleton.Image
                active
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  marginBottom: "16px",
                }}
              />
            )}

            <h5 className="fw-bold text-truncate">
              {character
                ? character.length > 10
                  ? character.slice(0, 15)
                  : character
                : name}
            </h5>

            <p className="mb-0">{character ? name : ""}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PeopleCard;
