import React, { useState } from "react";
import "./Card.scss";
import classNames from "classnames";
import background from "../../assets/images/Back@2x.png";

const Card = ({
  name,
  fillingText,
  fillingDescription,
  descriptionText,
  weight,
  available,
  unavailableText,
}) => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (available) {
      setSelected(!selected);
      setHovered(false);
    }
  };

  const cardClass = classNames("card", {
    card_unavailable: !available,
    card_selected: selected,
    card_hovered: hovered,
  });

  const buyElement = (
    <>
      Чего сидишь? Порадуй котэ,{" "}
      <button
        type="button"
        className="link-button card-text__link-button"
        onClick={handleClick}
      >
        купи.
      </button>
    </>
  );

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className={cardClass}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={background} alt="" className="card__background-image" />
        <div className="card__desc-block">
          <span className="card__pre-header">Сказочное заморское яство</span>
          <h3 className="card__header">{name}</h3>
          <p className="card__filling">{`с ${fillingText}`}</p>
          <p className="card__description">{descriptionText}</p>
        </div>
        <div className="card__weight-block">
          <span className="card__weight">{weight}</span>
          <span className="card__kilo">кг</span>
        </div>
      </div>
      <div className="card-text">
        <p
          className={classNames("card-text__text", {
            "card-text__text_unavailable": !available,
          })}
        >
          {available && !selected && buyElement}
          {available && selected && fillingDescription}
          {!available && `Печалька, с ${fillingText} закончился`}
        </p>
      </div>
    </div>
  );
};

export default Card;
