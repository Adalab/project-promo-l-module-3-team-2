import React, { useState } from "react";
import "../stylesheets/layout/_collapsable-header.scss";

function Collapsable(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const openClassName = open ? "" : "close";

  return (
    <div className={`collapsable__container ${openClassName}`}>
      <h2
        class="article article__title collapsable__header"
        title={props.title2}
        onClick={handleClick}
      >
        <span class={`article__icon ${props.iconImg}`} />
        <span class="article__title">{props.title}</span>
        <span class="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
      </h2>
      <div className={`collapsable-content ${openClassName}`}>
        {props.children}
      </div>
    </div>
  );
}

export default Collapsable;
