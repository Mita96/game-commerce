import React from "react";

function SocialItem({ item }) {
  return (
    <li>
      <a href="#">
        {" "}
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
}

export default SocialItem;
