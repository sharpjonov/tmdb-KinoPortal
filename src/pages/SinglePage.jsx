import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apis, baseImg } from "../API/api";
import Header from "../components/Header";

const SinglePage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    try {
      const res = await apis.getDetails(id);
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
      <div className="container my-5">
        <Link to="/popular">
          <button className="btn btn-outline-primary mb-4 px-4 py-2 shadow-sm">
            Back
          </button>
        </Link>
        <div className="card shadow-lg border-0 p-4">
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
              <p className="text-muted">{detail.overview}</p>
              <hr />
              <ul className="list-unstyled">
                <li>
                  <strong>Release Date:</strong> {detail.release_date}
                </li>
                <li>
                  <strong>Rating:</strong>{" "}
                  <span className="badge bg-success">
                    {detail.vote_average}
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
      </div>
    </>
  );
};

export default SinglePage;
