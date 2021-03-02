import React from "react";
import "../stylesheets/layout/_card.scss";

function ResetButton(props) {
  console.log(props);
  const handleClick = () => {
    console.log("me han clicado");
    props.handleReset();
  };
  return (
    <button className="card__reset " type="reset" onClick={handleClick}>
      <i className="far fa-trash-alt"></i> Reset
    </button>
  );
}

export default ResetButton;
