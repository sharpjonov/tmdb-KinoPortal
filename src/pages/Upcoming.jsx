import React, { useContext, useEffect, useState } from "react";
import { apis } from "../API/api";
import ThemeContext from "../context/ThemeContext";
import "../pages/Popular/popular.css";
import Card from "../components/Card/Card";
import Pagination from "@mui/material/Pagination";

const NowPlaying = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [activepage, setActivepage] = useState(1);

  const { mode } = useContext(ThemeContext);

  const UpcomingFunction = async () => {
    try {
      const res = await apis.getUpcoming(activepage);
      setUpcoming(res.data.results);
      // console.log(res);
      return res;
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    UpcomingFunction(activepage);
  }, [activepage]);

  return (
    <>
      <section
        className={`py-4 ${mode ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Upcoming</h2>
          <ul id="background-color__cinema--list___cards" className="row">
            {upcoming.map((el) => (
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
          <div className="d-flex justify-content-center mt-4">
            <Pagination onChange={(_, num) => setActivepage(num)} count={500} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NowPlaying;
