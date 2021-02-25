import React from "react";

function Palette(props) {
  return (
    <label className="design__squareLabel">
      <input type="radio" name="palette" value={props.value} checked />
      <ul className={props.className}>
        <li className="design__squareColor color-1"></li>
        <li className="design__squareColor color-2"></li>
        <li className="design__squareColor color-3"></li>
      </ul>
    </label>
  );
}

export default Palette;
