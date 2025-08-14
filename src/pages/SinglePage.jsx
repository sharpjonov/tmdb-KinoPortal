import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apis, baseBackdrop, baseImg } from "../API/api";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";

const SinglePage = () => {
  const { mode } = useContext(ThemeContext);

  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    try {
      const res = await apis.getDetails(id);
      console.log(res.data);
      setDetail(res.data);
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <>
      <Header />
      <section
        className={mode ? "bg-dark text-light" : "bg-light text-dark"}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${baseBackdrop}${detail.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="container pt-5">
          <div
            className={`card shadow-lg border-0 p-4 ${
              mode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <div className="row g-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={baseImg + detail.poster_path}
                  alt={detail.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-md-8">
                <h1 className="fw-bold mb-3">{detail.title}</h1>
                <p className={mode ? "text-light" : "text-muted"}>
                  {detail.overview}
                </p>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <strong>Release Date:</strong> {detail.release_date}
                  </li>
                  <li>
                    <strong>Rating:</strong>{" "}
                    <span
                      className={`badge ${
                        detail.vote_average?.toFixed(1) >= 8.0
                          ? "bg-primary"
                          : detail.vote_average?.toFixed(1) >= 7.0
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {detail.vote_average?.toFixed(1)}
                    </span>
                  </li>
                  <li>
                    <strong>Original Title:</strong> {detail.original_title}
                  </li>
                  <li>
                    <strong>Popularity:</strong> {detail.popularity}
                  </li>
                  <li>
                    <strong>Vote Count:</strong> {detail.vote_count}
                  </li>
                  <li>
                    <strong>Language:</strong> {detail.original_language}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/popular">
            <button className="btn btn-outline-primary mt-5 px-4 py-2 shadow-sm">
              Back
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
