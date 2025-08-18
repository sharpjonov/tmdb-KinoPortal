import React, { useContext, useEffect, useState } from "react";
import { apis } from "../API/api";
import ThemeContext from "../context/ThemeContext";
import "../pages/Popular/popular.css";
import Card from "../components/Card/Card";

const NowPlaying = () => {
  const [nowplaying, setNowPlaying] = useState([]);

  const { mode } = useContext(ThemeContext);

  const NowPlayingFunction = async () => {
    try {
      const res = await apis.getNowPlaying();
      setNowPlaying(res.data.results);
      // console.log(res);
      return res;
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    NowPlayingFunction();
  }, []);

  return (
    <>
      <section
        className={`py-4 ${mode ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Now Playing</h2>
          <ul id="background-color__cinema--list___cards" className="row">
            {nowplaying.map((el) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                img={el.poster_path}
                vote_average={el.vote_average}
                original_title={el.original_title}
                release_date={el.release_date}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NowPlaying;
