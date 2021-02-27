import React, { useState } from "react";
import "../stylesheets/layout/_page.scss";
import CardPreview from "./CardPreview";
import Form from "./Form";

function Main() {
  const [palettes, setPalettes] = useState(0);

  const handleInput = (inputValue) => {
    console.log(inputValue);
    setPalettes(inputValue);
  };

  return (
    <div className="bg__container">
      <main className="main--flex">
        <CardPreview />
        <Form handleInput={handleInput} />
      </main>
    </div>
  );
}
export default Main;
