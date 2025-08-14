import React, { useContext, useEffect, useState } from "react";
import { apis } from "../API/api";
import ThemeContext from "../context/ThemeContext";
import "../pages/Popular/popular.css";
import Card from "../components/Card/Card";

const Layout = () => {
  const [toprate, setToprate] = useState([]);

  const { mode } = useContext(ThemeContext);

  const getTopRate = async () => {
    try {
      const res = await apis.getTopRated();
      setToprate(res.data.results);
      // console.log(res.data.results);
      return res;
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    getTopRate();
  }, []);

  return (
    <>
      <section
        className={`py-4 ${mode ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Top Rated Movies</h2>
          <ul id="background-color__cinema--list___cards" className="row">
            {toprate.map((el) => (
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

export default Layout;
