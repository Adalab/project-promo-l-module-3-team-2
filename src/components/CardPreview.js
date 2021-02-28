// import { checkPropTypes } from 'prop-types';
import React from 'react';
import '../stylesheets/layout/_card.scss';
import Card from './Card';
import ButtonResetCard from './ResetButtonPreview';

function CardPreview(props) {
  return (
    <div className="bg__container--card">
      <section className="card">
        <div className="card__container wrapper">
          <ButtonResetCard />
          <Card
            name={props.name}
            email={props.email}
            job={props.job}
            phone={props.phone}
            linkedin={props.linkedin}
            github={props.github}
          />
        </div>
      </section>
    </div>
  );
}

export default CardPreview;
