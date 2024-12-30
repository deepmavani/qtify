
import React from "react";
import "./Card.css";

const Card = ({ album }) => {
  return (
    <div className="card">
      <img src={album.image} alt={album.title} className="card-image" />
      <h3 className="card-title">{album.title}</h3>
      <p className="card-subtitle">{album.singer}</p>
    </div>
  );
};

export default Card;
