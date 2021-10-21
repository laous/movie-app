import React, { useState } from "react";
import { data } from "../data";
import Card from "./Card";
import "./Card.css";
import ReactPaginate from "react-paginate";

function CardList() {
  const [movies, setMovies] = useState(data.slice(0, data.length));
  const [pageNumber, setPageNumber] = useState(0);
  const moviePerPage = 9;
  const pagesVisited = pageNumber * moviePerPage;
  const displayMovies = movies
    .slice(pagesVisited, pagesVisited + moviePerPage)
    .map((movie, key) => <Card movie={movie} key={key} />);

  const pageCount = Math.ceil(movies.length / moviePerPage);

  const onPageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="card-list">
      {displayMovies}
      <ReactPaginate pageCount={pageCount} onPageChange={onPageChange} />
    </div>
  );
}

export default CardList;
