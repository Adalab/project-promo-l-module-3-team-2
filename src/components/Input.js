import React from "react";

function Input(props) {
  return (
    <>
      <label for={props.htmlFor} className={props.labelClass}>
        Nombre completo <span className="form--required">*</span>
      </label>
      <input
        id={props.inputId}
        name={props.inputName}
        type={props.inputType}
        className={props.inputClass}
        placeholder={props.inputPlaceholder}
        required
      />
    </>
  );
}

export default Input;
