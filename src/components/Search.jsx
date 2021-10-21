import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" className="search-box" />
      <input type="button" className="search-button" value="Search" />
    </div>
  );
}

export default Search;
