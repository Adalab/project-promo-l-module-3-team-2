import propTypes from "prop-types";
import React from "react";
import "../stylesheets/layout/_share.scss";

function Share(props) {
  const handleShare = () => {
    props.handleShare();
  };

  console.log(props);
  return (
    <div className="share">
      <button type="submit" className="share__button" onClick={handleShare}>
        <i className="far fa-id-card"></i>
        <span className="share__button--text"> Crear tarjeta </span>
      </button>
      <div className="shareclick hidden-share">
        <h3 className="shareclick__title">La tarjeta ha sido creada:</h3>
        <p className="shareclick__text">{props.serverData.cardURL}</p>

        <button type="button" className="shareclick__twitter">
          <i className="fab fa-twitter"></i>
          <a
            href="www.twitter.com"
            className="shareclick__twitter--text"
            data-show-count="false"
            target="_blank"
          >
            Compartir en twitter
          </a>
        </button>
      </div>
    </div>
  );
}

export default Share;
