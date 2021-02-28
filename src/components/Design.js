import React from "react";
import "../stylesheets/layout/_desing.scss";
import Palette from "./Palette.js";



function Design(props) {
  console.log(props);
  return (
    <div className="design">
      <h2 className="design__title">Colores</h2>
      <div className="design__colorcontainer">
        <Palette value={0} palette={props.palettes} handleInput={props.handleInput} />
        <Palette value={1} palette={props.palettes} handleInput={props.handleInput} />
        <Palette value={2} palette={props.palettes} handleInput={props.handleInput} />
      </div>
    </div>
  );
}
export default Design;
