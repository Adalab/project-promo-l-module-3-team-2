import { checkPropTypes } from 'prop-types';
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
          <Card data={props.data} />
        </div>
      </section>
    </div>
  );
}

export default CardPreview;
