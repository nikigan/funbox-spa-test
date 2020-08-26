import React from "react";
import "./Cards.scss";
import Card from "../Card";

const Cards = () => {
  return (
    <div className="cards">
      <div className="row justify-content-center">
        <Card
          name="Нямушка"
          available
          descriptionText={`10 порций
мышь в подарок`}
          fillingDescription="Печень утки разварная с артишоками."
          weight="0,5"
          fillingText="фуа-гра"
        />
        <Card
          name="Нямушка"
          available
          descriptionText={`40 порций
2 мыши в подарок`}
          weight="2"
          fillingText="рыбой"
          fillingDescription="Головы щучьи с чесноком да свежайшая сёмгушка."
        />
        <Card
          name="Нямушка"
          available={false}
          descriptionText={`100 порций
5 мышей в подарок
заказчик доволен`}
          weight="5"
          fillingText="курицей"
          fillingDescription="Филе из цыплят с трюфелями в бульоне."
        />
      </div>
    </div>
  );
};

export default Cards;
