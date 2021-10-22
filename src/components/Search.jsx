import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="search">
      <input
        type="text"
        className="search-box"
        onChange={props.onInputChange}
        value={props.value}
      />
      <input type="button" className="search-button" value="Search" />
    </div>
  );
}

export default Search;
