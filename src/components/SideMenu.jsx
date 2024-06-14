import React, { useState } from "react";
import "./SideMenu.css";
import ListData from "../data/ListData";
import ListItems from "./ListItems";
import SocialPlatforms from "../data/SocialPlatform";
import SocialItem from "./SocialItem";

function SideMenu({ active, sectionActive }) {
  const [navData, setMavData] = useState(ListData);
  const [socData, setSocialData] = useState(SocialPlatforms);

  function handleNavOnClick(id, target) {
    const newNavData = navData.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setMavData(newNavData);
    sectionActive(target);
  }
  return (
    <div className={`sideMenu ${active ? "active" : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Start Playing</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <ListItems
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          ></ListItems>
        ))}
      </ul>
      <ul className="social">
        {socData.map((item) => (
          <SocialItem key={item._id} item={item}></SocialItem>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
