import React, { useState } from "react";
//import "../stylesheets/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import defaultAvatar from "../images/cardPhoto.png";

function CardGenerator(props) {
  const [palettes, setPalettes] = useState("0");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [avatar, setAvatar] = useState([defaultAvatar]);

  const handleInput = (inputId, inputValue) => {
    if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "job") {
      setJob(inputValue);
    } else if (inputId === "email") {
      setEmail(inputValue);
    } else if (inputId === "phone") {
      setPhone(inputValue);
    } else if (inputId === "linkedin") {
      setLinkedin(inputValue);
    } else if (inputId === "github") {
      setGithub(inputValue);
    } else if (inputId === "palette") {
      setPalettes(inputValue);
    }
  };

  function updateAvatar(avatar) {
    setAvatar(avatar);
    console.log(avatar);
  }

  const handleReset = () => {
    setName("");
    setJob("");
    setPhone("");
    setEmail("");
    setLinkedin("");
    setGithub("");
    setPalettes("0");
  };

  return (
    <>
      <Header />
      <Main
        name={name}
        email={email}
        job={job}
        phone={phone}
        linkedin={linkedin}
        github={github}
        palette={palettes}
        handleInput={handleInput}
        handleReset={handleReset}
        avatar={avatar}
        updateAvatar={updateAvatar}
      />
      <Footer />
    </>
  );
}

//revisar el estado y ver cómo pasarlo de App a Card

export default CardGenerator;
