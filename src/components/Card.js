import { checkPropTypes } from 'prop-types';
import React from 'react';
import '../stylesheets/layout/_card.scss';

function Card(props) {
  return (
    <article className="card__data ">
      <h2 className="card__data--title name ">
        {props.data || 'Nombre Apellidos'}
      </h2>
      <h3 className="card__data--title job ">Front-end developer</h3>
      <div className="card__data--img  "></div>

      <ul className="card__data--list">
        <li className="circle">
          <a href="555 333 222" className="card__data--icon phone ">
            <i className="fas fa-mobile-alt"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href="mailto:username@example.com"
            className="card__data--icon email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href="www.myLinkedIn.com"
            className="card__data--icon linkedin"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="circle">
          <a
            href="www.myGitHub.com"
            className="card__data--icon github "
            target="_blank"
          >
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Card;
