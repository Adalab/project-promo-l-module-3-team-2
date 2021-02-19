import React from 'react';
import '../stylesheets/layout/_share.scss';

function Share() {
  return (
    <section className="js-collapsable ">
      {/* collapsed */}
      <h2
        className="article article__title collapsable__header"
        title="@@titleh2"
      >
        <span className="article__icon @@iconImg"></span>
        <span className="article__title">Comparte</span>
        <span className="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
      </h2>

      {/* COMPARTE  */}
      {/* <include
                src="./collapsable-header.html"
                title="Comparte"
                iconImg="fas fa-share-alt"
                titleh2=""
              ></include> */}

      <div className="share collapsable__container">
        <button type="submit" className="share__button js-share-btn">
          <i className="far fa-id-card"></i>
          <span className="share__button--text"> Crear tarjeta </span>
        </button>
        <div className="shareclick hidden-share js-twitter-share">
          <h3 className="shareclick__title">La tarjeta ha sido creada:</h3>
          <p className="shareclick__text js-card-link"></p>

          <button type="button" className="shareclick__twitter js-twitter-btn">
            <i className="fab fa-twitter"></i>
            <a
              href=""
              className="js-twitter-link shareclick__twitter--text"
              data-show-count="false"
              target="_blank"
            >
              Compartir en twitter
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Share;
