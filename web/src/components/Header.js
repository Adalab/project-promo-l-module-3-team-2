import React from "react";
import logo from "../images/title-creatures.svg";
import "../stylesheets/layout/_header-form.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          <img className="header__img" src={logo} alt="Awesome profile-cards" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
