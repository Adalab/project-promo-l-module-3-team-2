import propTypes from "prop-types";
//import React from "react";
import "../stylesheets/layout/_share.scss";
import React, { useState } from "react";

function Share(props) {
  const handleShare = () => {
    props.handleShare();
  };

  const shareCard = () => {
    if (props.serverData.success === true) {
      return (
        <>
          <h3 className="shareclick__title">La tarjeta ha sido creada:</h3>
          <p className="shareclick__text">
            <a className="shareclick__text" href={props.serverData.cardURL}>
              {props.serverData.cardURL}
            </a>
          </p>

          <button type="button" className="shareclick__twitter">
            <i className="fab fa-twitter"></i>
            <a
              href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${props.serverData.cardURL}`}
              className="shareclick__twitter--text"
              data-show-count="false"
              target="_blank"
            >
              Compartir en twitter
            </a>
          </button>
        </>
      );
    } else {
      return (
        <>
          <p>La tarjeta no puede ser creada.</p>
          <p>Por favor revisa que todos los campos enten rellenos.</p>
        </>
      );
    }
  };

  return (
    <div className="share">
      <button type="submit" className="share__button" onClick={handleShare}>
        <i className="far fa-id-card"></i>
        <span className="share__button--text"> Crear tarjeta </span>
      </button>
      <div className={`shareclick ${props.hiddenClass}`}>{shareCard()}</div>
    </div>
  );
}

export default Share;
