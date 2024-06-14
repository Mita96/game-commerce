import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../App";
import userImage from "../img/vlajce.jpg";

function Header({ toggleActive }) {
  const { library, bag } = useContext(AppContext);
  return (
    <header>
      <a className="menu" href="#" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            {" "}
            <img src={userImage} alt="User_Image" />
          </a>
          <div className="user">
            <span>User Name</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
