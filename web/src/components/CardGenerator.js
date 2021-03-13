import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import fetchAPI from "../services/Api";
import ls from "../services/LocalStorage";

function CardGenerator() {
  const localStorageData = ls.get("data") || {};
  const [palettes, setPalettes] = useState(localStorageData.palettes || 0);
  const [name, setName] = useState(localStorageData.name);
  const [job, setJob] = useState(localStorageData.job);
  const [email, setEmail] = useState(localStorageData.email);
  const [phone, setPhone] = useState(localStorageData.phone);
  const [linkedin, setLinkedin] = useState(localStorageData.linkedin);
  const [github, setGithub] = useState(localStorageData.github);
  const [avatar, setAvatar] = useState(localStorageData.avatar);
  const [serverData, setServerData] = useState({});

  useEffect(() => {
    ls.set("data", {
      palettes: palettes,
      name: name,
      job: job,
      email: email,
      phone: phone,
      linkedin: linkedin,
      github: github,
      avatar: avatar,
    });
  });

  // const [palettes, setPalettes] = useState("0");
  // const [name, setName] = useState("");
  // const [job, setJob] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [linkedin, setLinkedin] = useState("");
  // const [github, setGithub] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [serverData, setServerData] = useState({});

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
  }

  const handleReset = () => {
    setName("");
    setJob("");
    setPhone("");
    setEmail("");
    setLinkedin("");
    setGithub("");
    setPalettes("0");
    setAvatar("");
  };

  const handleShare = () => {
    console.log("me han clicado");
    const userData = {
      palette: parseInt(palettes) + 1,
      name: name,
      job: job,
      phone: phone,
      email: email,
      linkedin: linkedin,
      github: github,
      photo: avatar,
    };
    console.log(userData);
    fetchAPI(userData).then((serverData) => {
      console.log(serverData);
      setServerData(serverData);
    });
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
        handleShare={handleShare}
        serverData={serverData}
      />
      <Footer />
    </>
  );
}

export default CardGenerator;
