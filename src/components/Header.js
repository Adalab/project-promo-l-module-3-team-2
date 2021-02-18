import React from "react";
import logo from "../images/title-creatures.svg";
import "../stylesheets/layout/_header-form.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a
          href="./index.html"
          className="header__link"
          title="Volver a la portada"
        >
          <img className="header__img" src={logo} alt="Awesome profile-cards" />
        </a>
      </div>
    </header>
  );
}

export default Header;
