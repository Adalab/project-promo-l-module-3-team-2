import React, { useState } from 'react';
//import "../stylesheets/App.scss";

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App(props) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const handleInput = (inputId, inputValue) => {
    if (inputId === 'name') {
      setName(inputValue);
      console.log(inputValue);
    } else if (inputId === 'job') {
      setJob(inputValue);
    } else if (inputId === 'email') {
      setEmail(inputValue);
    } else if (inputId === 'phone') {
      setPhone(inputValue);
    } else if (inputId === 'linkedin') {
      setLinkedin(inputValue);
    } else if (inputId === 'github') {
      setGithub(inputValue);
    }
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
        handleInput={handleInput}
      />
      <Footer />
    </>
  );
}

//revisar el estado y ver cómo pasarlo de App a Card

export default App;
