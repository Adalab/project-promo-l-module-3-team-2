import React from "react";

function Collapsable(props) {
  return (
    <div className="collapsable__container">
      <h2
        class="article article__title collapsable__header"
        title={props.title2}
      >
        <span class={`article__icon ${props.iconImg}`} />
        <span class="article__title">{props.title}</span>
        <span class="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
      </h2>
      <div className="collapsable__content">{props.children}</div>
    </div>
  );
}

export default Collapsable;
