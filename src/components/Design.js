import React from "react";
import "../stylesheets/layout/_desing.scss";
import Palette from "./Palette.js";

function Design(props) {
  console.log(props);
  return (
    <div className="design">
      <h2 className="design__title">Colores</h2>
      <div className="design__colorcontainer">
        <Palette
          className="palette-0"
          value="0"
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
        <Palette
          className="palette-1"
          value="1"
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
        <Palette
          className="palette-2"
          value="2"
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
      </div>
    </div>
  );
}
export default Design;
