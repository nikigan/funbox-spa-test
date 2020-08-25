import React from "react";
import "./Cards.scss";
import Card from "../Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        name="Нямушка"
        available
        descriptionText={`10 порций\n мышь в подарок`}
        weight={0.5}
        fillingText="фуа-гра"
      />
    </div>
  );
};

export default Cards;
