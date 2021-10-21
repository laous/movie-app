import React from "react";
import "./Card.css";

function Card(props) {
  const imageLink = props.movie.image;
  console.log(imageLink);
  return (
    <div className="card">
      <img src={imageLink} alt={props.movie.name} className="movie-image" />
      <div className="movie-info">
        <div className="movie-title">
          <h2>{props.movie.name}</h2>
        </div>
        <div className="movie-desc">{props.movie.description}</div>
      </div>
    </div>
  );
}

export default Card;
