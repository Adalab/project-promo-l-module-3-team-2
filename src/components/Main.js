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
          palette={props.palette}
          handleReset={props.handleReset}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
        />
        <Form
          handleInput={props.handleInput}
          name={props.name}
          email={props.email}
          job={props.job}
          phone={props.phone}
          linkedin={props.linkedin}
          palette={props.palette}
          github={props.github}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
        />
      </main>
    </div>
  );
}
export default Main;
