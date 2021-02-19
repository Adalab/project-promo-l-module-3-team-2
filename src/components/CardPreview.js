import React from "react";
import "../stylesheets/layout/_card.scss";
import Card from "./Card";
import ButtonResetCard from "./ResetButtonPreview";

function CardPreview() {
  return (
    <div className="bg__container--card">
      <section className="card">
        <div className="card__container wrapper">
          <ButtonResetCard />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default CardPreview;
