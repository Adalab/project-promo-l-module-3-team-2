import React from "react";
import "../stylesheets/layout/_card.scss";
import Card from "./Card";
import ResetButton from "./ResetButton";

function CardPreview(props) {
  return (
    <div className="bg__container--card">
      <section className="card">
        <div className="card__container wrapper">
          <ResetButton handleReset={props.handleReset} />
          <Card
            name={props.name}
            email={props.email}
            job={props.job}
            phone={props.phone}
            linkedin={props.linkedin}
            github={props.github}
            palette={props.palette}
            handleReset={props.handleReset}
            updateAvatar={props.updateAvatar}
            avatar={props.avatar}
          />
        </div>
      </section>
    </div>
  );
}

export default CardPreview;
