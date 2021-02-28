import React, { useState } from "react";
//import "../stylesheets/App.scss";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  /*
  const [data, setData] = useState({
    name: name,
    job: job,
  });*/

  function handleInput(inputName) {
    console.log(inputName);
    setName(inputName);
    console.log(name);
  }

  return (
    <>
      <Header />
      <Main sendInput={handleInput} />
      <Footer />
    </>
  );
}

export default App;
