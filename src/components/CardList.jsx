import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";
import ReactPaginate from "react-paginate";

function CardList(props) {
  const movies = props.list;

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
    <>
      <div className="card-list">{displayMovies}</div>

      {pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={onPageChange}
          containerClassName="center"
        />
      )}
    </>
  );
}

export default CardList;
