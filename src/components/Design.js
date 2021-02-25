import React from "react";
import "../stylesheets/layout/_desing.scss";
import Palette from "./Palette.js";

function Design() {
  return (
    <div className="design">
      <h2 className="design__title">Colores</h2>
      <div className="design__colorcontainer">
        <Palette className="palette-0" value="0" />
        <Palette className="palette-1" value="1" />
        <Palette className="palette-2" value="2" />
      </div>
    </div>
  );
}
export default Design;
