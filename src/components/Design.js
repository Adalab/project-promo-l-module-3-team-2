import React from "react";
import "../stylesheets/layout/_desing.scss";

function Design() {
  return (
    <section className="js-collapsable">
      <h2
        className="article article__title collapsable__header"
        title="@@titleh2"
      >
        <span className="article__icon far fa-object-ungroup"></span>
        {/* {@@title} {@@iconImg} */}
        <span className="article__title">Diseña</span>
        <span className="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
      </h2>
      {/* COLAPASABLE DISEÑA -- pendiente aclarar que hacer con el @@ cuando hagamos componentes */}
      {/* <include
              src="./collapsable-header.html"
              title="Diseña"
              iconImg="far fa-object-ungroup"
              titleh2=""
            ></include> */}

      <div className="design collapsable__container">
        <h2 className="design__title">Colores</h2>

        <div className="design__colorcontainer">
          <label className="design__squareLabel">
            <input
              className="js-palette"
              type="radio"
              name="palette"
              value="0"
              checked
            />
            <ul className="palette-0">
              <li className="design__squareColor color-1"></li>
              <li className="design__squareColor color-2"></li>
              <li className="design__squareColor color-3"></li>
            </ul>
          </label>

          <label className="design__squareLabel">
            <input
              className="js-palette"
              type="radio"
              name="palette"
              value="1"
            />
            <ul className="palette-1">
              <li className="design__squareColor color-1"></li>
              <li className="design__squareColor color-2"></li>
              <li className="design__squareColor color-3"></li>
            </ul>
          </label>

          <label className="design__squareLabel">
            <input
              className="js-palette"
              type="radio"
              name="palette"
              value="2"
            />
            <ul className="palette-2">
              <li className="design__squareColor color-1"></li>
              <li className="design__squareColor color-2"></li>
              <li className="design__squareColor color-3"></li>
            </ul>
          </label>
        </div>
      </div>
    </section>
  );
}
export default Design;
