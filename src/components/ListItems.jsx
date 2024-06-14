import React from "react";

function ListItems({ item, navOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`${item.active ? "active" : undefined}`}
        onClick={() => navOnClick(item._id, item.target)}
      >
        {" "}
        <i className={`bi ${item.icon}`}></i>
        <span className="listName">{item.name}</span>
      </a>
    </li>
  );
}

export default ListItems;

//34 MIN
