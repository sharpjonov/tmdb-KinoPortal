import React, { useContext, useEffect, useState } from "react";
import { apis } from "../API/api";
import ThemeContext from "../context/ThemeContext";
// import Card from "../components/Card/Card";
import PeopleCard from "../components/PeopleCard";

const People = () => {
  const [people, setPeople] = useState([]);

  const { mode } = useContext(ThemeContext);

  const getPerson = async () => {
    try {
      const res = await apis.getPeople();
      setPeople(res.data.results);
      console.log(res.data.results);
      return res;
    } catch (error) {
      console.log("API XATOSI: " + error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <>
      <section
        className={`py-4 ${mode ? "bg-dark text-light" : "bg-light text-dark"}`}
      >
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">Famous People</h2>
          <ul id="background-color__cinema--list___cards" className="row">
            {people.map((el) => (
              <PeopleCard
                id={el.id}
                name={el.name}
                img={el.profile_path}
                original_name={el.original_name}
                popularity={el.popularity}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default People;
