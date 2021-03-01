import React, { useState } from 'react';
import '../stylesheets/layout/_collapsable-header.scss';

function Collapsable(props) {
  const [close, setClose] = useState(true);

  const handleClick = () => {
    setClose(!close);
  };

  const closeClassName = close ? 'close' : '';
  const arrowClassName = close ? 'header-arrow' : '';

  return (
    <div className={`collapsable__container ${closeClassName}`}>
      <h2
        className="article article__title collapsable__header"
        title={props.title2}
        onClick={handleClick}
      >
        <span className={`article__icon ${props.iconImg}`} />
        <span className="article__title">{props.title}</span>
        <span
          className={`fas fa-chevron-up article__icon--collapsible collapsable__header--arrow ${arrowClassName}`}
        ></span>
      </h2>
      <div className={`collapsable-content `}>{props.children}</div>
    </div>
  );
}

export default Collapsable;
