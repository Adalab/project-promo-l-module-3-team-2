import React from "react";
import "../stylesheets/layout/_desing.scss";

function Design() {
  return (
    <div className="design">
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
          <input className="js-palette" type="radio" name="palette" value="1" />
          <ul className="palette-1">
            <li className="design__squareColor color-1"></li>
            <li className="design__squareColor color-2"></li>
            <li className="design__squareColor color-3"></li>
          </ul>
        </label>

        <label className="design__squareLabel">
          <input className="js-palette" type="radio" name="palette" value="2" />
          <ul className="palette-2">
            <li className="design__squareColor color-1"></li>
            <li className="design__squareColor color-2"></li>
            <li className="design__squareColor color-3"></li>
          </ul>
        </label>
      </div>
    </div>
  );
}
export default Design;
