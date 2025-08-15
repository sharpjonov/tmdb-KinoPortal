import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { baseBackdrop, baseImg } from "../API/api";

const PeopleCard = ({ id, img, name, original_name, popularity }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <li className="list-unstyled col-lg-3 col-md-4 col-sm-6 mb-4">
      <Link className="text-decoration-none" to={`/actors/info/${id}`}>
        <div
          className={`card border-0 h-100 text-center ${
            mode ? "bg-dark text-light shadow-lg" : "bg-light text-dark shadow"
          }`}
          style={{ transition: "transform 0.3s", cursor: "pointer" }}
        >
          <div className="p-3">
            <img
              src={img ? baseBackdrop + img : "Loading.."}
              className="rounded-circle img-fluid"
              alt={name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                border: "4px solid #fff",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-bold text-truncate" title={name}>
              {name}
            </h5>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PeopleCard;
