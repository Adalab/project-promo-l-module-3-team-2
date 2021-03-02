import React from "react";

function Label(props) {
  return (
    <label htmlFor={props.id} className={props.labelClass}>
      {props.labelText}{" "}
      <span className={props.asteriskClass}>{props.asterisk}</span>
    </label>
  );
}

Label.defaultProps = {
  labelClass: "form__label",
  asteriskClass: "form--required",
  asterisk: "*",
};

export default Label;
