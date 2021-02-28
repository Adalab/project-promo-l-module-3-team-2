import React from "react";
import "../stylesheets/layout/_page.scss";
import CardPreview from "./CardPreview";
import Form from "./Form";

function Main(props) {
  return (
    <div className="bg__container">
      <main className="main--flex">
        <CardPreview
          name={props.name}
          email={props.email}
          job={props.job}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          handleReset={props.handleReset}
        />
        <Form handleInput={props.handleInput} handleReset={props.handleReset} />
      </main>
    </div>
  );
}
export default Main;
