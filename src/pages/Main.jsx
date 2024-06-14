import React, { useEffect, useRef, useState, useContext } from "react";
import { AppContext } from "../App";
import "./Main.css";
import SideMenu from "../components/SideMenu";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import MyLibrary from "./MyLibrary";
import Bag from "./Bag";
function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGame] = useState([]);
  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  function handleSectionActive(target) {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
  }

  function fetchData() {
    fetch("http://localhost:3000/api/games.json")
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // FUNCTION THATS GOING TO GET ACTIVATED
  // WHEN PRESSING A BUTTON ALSO THIS FUNCTION WILL
  // PASSED DOWN AS A PROP TO HEADER COMPONENT
  function handleToggleActive() {
    setActive(!active);
  }
  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionActive}></SideMenu>
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive}></Header>
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef}></Home>
              <Categories games={games} reference={categoriesRef}></Categories>
              <MyLibrary games={library} reference={libraryRef}></MyLibrary>
              <Bag games={bag} reference={bagRef}></Bag>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
