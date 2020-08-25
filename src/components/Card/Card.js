import React from "react";
import "./Card.scss";
import catImage from "../../assets/images/Photo@2x.png";

const Card = ({ name, fillingText, descriptionText, weight, available }) => {
  return (
    <div className="card">
      <span className="card__pre-header">Сказочное заморское яство</span>
      <h3 className="card__header">{name}</h3>
      <p className="card__filling">{`с ${fillingText}`}</p>
      <p className="card__description">{descriptionText}</p>
      <img src={catImage} alt="" className="card__image" />
    </div>
  );
};

export default Card;
