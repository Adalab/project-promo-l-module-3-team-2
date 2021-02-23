import React from "react";
import "../stylesheets/layout/_collapsable-header.scss";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Form() {
  return (
    <div className="bg__container--design">
      <div className="main__pageContainer">
        <Collapsable
          title="Diseña"
          iconImg="far fa-object-ungroup"
          title2="Púlsa aquí para desplegar las opciones de diseño"
        >
          <Design />
        </Collapsable>

        <Collapsable
          title="Rellena"
          iconImg="far fa-keyboard"
          title2="Púlsa aquí para desplegar las opciones de rellena"
        >
          <Fill />
        </Collapsable>

        <Collapsable
          title="Comparte"
          iconImg="fas fa-share-alt"
          title2="Púlsa aquí para desplegar las opciones de comparte"
        >
          <Share />
        </Collapsable>
      </div>
    </div>
  );
}
export default Form;
