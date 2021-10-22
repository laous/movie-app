import React from "react";
import "./Card.css";

function Card(props) {
  const imageLink = props.movie.posterUrl;
  console.log(imageLink);
  return (
    <div className="card">
      <img src={imageLink} alt={props.movie.title} className="movie-image" />
      <div className="movie-info">
        <div className="movie-title">
          <h3>{props.movie.title}</h3>
        </div>
        <div className="movie-desc">
          <p>{props.movie.plot}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
