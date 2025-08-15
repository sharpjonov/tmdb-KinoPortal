import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

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
                  <li className="d-flex align-items-center gap-2 mb-3">
                    <span
                      className="badge rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: mode ? "#212529" : "#fff",
                        border: `3px solid ${
                          detail?.vote_average >= 8.0
                            ? "purple"
                            : detail?.vote_average >= 7.0
                            ? "green"
                            : "red"
                        }`,
                        color: mode ? "white" : "black",
                      }}
                    >
                      {Math.round(detail?.vote_average * 10)}%
                    </span>
                    <strong>
                      User <br /> Score
                    </strong>{" "}
                  </li>
                  <li>
                    <strong>Release Date:</strong> {detail.release_date}
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
          <button
            onClick={() => navigate(-1)}
            className={`btn mt-4 px-4 py-2 shadow-sm ${
              mode ? "btn-dark" : "btn-light"
            }`}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
