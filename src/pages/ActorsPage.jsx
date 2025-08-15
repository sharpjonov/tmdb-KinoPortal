import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apis, baseBackdrop, baseImg } from "../API/api";
import Header from "../components/Header";
import ThemeContext from "../context/ThemeContext";
import ActorMoviesCard from "../components/ActorMoviesCard";

const ActorsPage = () => {
  const { mode } = useContext(ThemeContext);

  const { id } = useParams();

  const [persondetail, setPersondetail] = useState({});
  const [actorMovies, setActorMovies] = useState([]);

  const getActorDetail = async () => {
    try {
      const res = await apis.getActorDetails(id);
      setPersondetail(res.data);
      //   console.log(res.data);
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  const getActorMovie = async () => {
    try {
      const res = await apis.getActorMovies(id);
      setActorMovies(res.data.cast);
      console.log(res.data.cast);
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    getActorDetail();
    getActorMovie();
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section
        className={mode ? "bg-dark text-light" : "bg-light text-dark"}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${baseBackdrop}${persondetail.backdrop_path})`,
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
                  src={baseBackdrop + persondetail?.profile_path}
                  alt={persondetail.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
              <div className="col-md-8">
                <h1 className="fw-bold mb-3">{persondetail.name}</h1>
                <p className="fw-bold m-0 mb-2">
                  Known For <br />
                  <span className="fw-normal">
                    {persondetail.known_for_department}
                  </span>
                </p>
                <p className="fw-bold m-0">
                  Gender <br />
                  <span className="fw-normal">{`${
                    persondetail?.gender === 2 ? "Male" : "Female"
                  }`}</span>
                </p>
                {/* <p className={mode ? "text-light" : "text-muted"}>
                  {persondetail.biography}
                </p> */}
                <hr />
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Birthday</strong> <br /> {persondetail.birthday}
                  </li>
                  <li className="mb-2">
                    <strong>
                      Place of Birth
                      <br />
                    </strong>{" "}
                    {persondetail.place_of_birth}
                  </li>
                  <li className="mb-2">
                    <strong>
                      Original Title <br />
                    </strong>{" "}
                    {persondetail.also_known_as?.slice(1, 2)}
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
          <div className="row mt-5">
            {actorMovies.map((movie) => (
              <ActorMoviesCard
                key={movie.id}
                id={movie.id}
                img={movie.poster_path}
                character={movie.character}
                title={movie.title}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ActorsPage;
