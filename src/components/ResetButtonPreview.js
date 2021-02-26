import React from "react";
import "../stylesheets/layout/_card.scss";

function ButtonResetCard() {
  return (
    <button className="card__reset " type="reset">
      <i className="far fa-trash-alt"></i> Reset
    </button>
  );
}

export default ButtonResetCard;
