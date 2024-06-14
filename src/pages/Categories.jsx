import React, { useState } from "react";
import "./Categories.css";
import filterListData from "../data/FilterListData";
import GameCard from "../components/GameCard";

function Categories({ games, reference }) {
  const [data, setData] = useState(games);

  const [filters, setFilters] = useState(filterListData);

  function handleFilterGames(category) {
    const newFilters = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    });

    setFilters(newFilters);

    if (category === "All") {
      setData(games);
      return;
    }
    setData(games.filter((game) => game.category === category));
  }

  const [text, setText] = useState("");
  function handleSearchGame(event) {
    //console.log(event.target.value);
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setText(event.target.value);
  }

  return (
    <section id="categories" className="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handleFilterGames(filter.name)}
                  key={filter._id}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                value={text}
                onChange={handleSearchGame}
                type="text"
                name="search"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((game) => (
            <GameCard key={game._id} game={game}></GameCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

//55min 48sec
