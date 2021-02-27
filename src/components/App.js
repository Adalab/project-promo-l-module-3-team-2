import React, { useState } from 'react';
//import "../stylesheets/App.scss";

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const handleInput = (inputId, inputValue) => {
    if (inputId === 'name') {
      setName(inputValue);
    }
  };
  console.log(useState);
  return (
    <>
      <Header />
      <Main data={name} handleInput={handleInput} />
      <Footer />
    </>
  );
}

//revisar el estado y ver cómo pasarlo de App a CardPreview

export default App;
