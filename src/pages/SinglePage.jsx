import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apis, baseBackdrop, baseImg } from "../API/api";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import { Skeleton, Card } from "antd";
import PeopleCard from "../components/PeopleCard";

const SinglePage = () => {
  const { mode } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [actor, setActor] = useState([]);

  const getDetail = async () => {
    try {
      setLoading(true);
      const res = await apis.getDetails(id);
      setDetail(res.data);
    } catch (error) {
      console.log("API XATOSI: " + error);
    } finally {
      setLoading(false);
    }
  };

  const getActorDetail = async (id) => {
    try {
      const res = await apis.getActorList(id);
      setActor(res.data.cast);
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    getDetail();
    getActorDetail(id);
  }, [id]);

  return (
    <>
      <Header />
      <section
        className={mode ? "bg-dark text-light" : "bg-light text-dark"}
        style={{
          backgroundImage: detail.backdrop_path
            ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${baseBackdrop}${detail.backdrop_path})`
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="container py-5">
          <div
            className={`card shadow-lg border-0 p-4 mb-4 ${
              mode ? "bg-dark text-light" : "bg-white text-dark"
            }`}
          >
            <div className="row g-4 align-items-center">
              <div className="col-md-4 text-center">
                {loading ? (
                  <Skeleton.Image active style={{ width: 200, height: 300 }} />
                ) : (
                  <img
                    src={baseImg + detail.poster_path}
                    alt={detail.title}
                    className="img-fluid rounded shadow"
                  />
                )}
              </div>
              <div className="col-md-8">
                {loading ? (
                  <Skeleton active paragraph={{ rows: 6 }} title />
                ) : (
                  <>
                    <h1 className="fw-bold mb-3">{detail.title}</h1>
                    <p className="">{detail.overview}</p>
                    <hr />
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center gap-3 mb-3">
                        <span
                          className=" rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            fontSize: "14px",
                            border: `3px solid ${
                              detail?.vote_average >= 8.0
                                ? "purple"
                                : detail?.vote_average >= 7.0
                                ? "green"
                                : "red"
                            }`,
                          }}
                        >
                          {Math.round(detail?.vote_average * 10)}%
                        </span>
                        <strong>User Score</strong>
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
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className={`btn px-4 py-2 shadow-sm ${
              mode ? "btn-dark" : "btn-light"
            }`}
          >
            Back
          </button>
        </div>
      </section>
      <section className={`${mode ? "bg-dark" : "bg-light"}`}>
        <div className="pt-5 pb-3 container">
          <h3
            style={{ fontSize: "40px" }}
            className={`mb-5 text-center ${mode ? "text-light" : "text-dark"}`}
          >
            Series Cast
          </h3>
          <ul className="row list-unstyled">
            {actor?.map((el) => (
              <PeopleCard
                key={el.id}
                id={el.id}
                img={el.profile_path}
                name={el.name}
                character={el.character}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
