import React from "react";

function Input(props) {
  return (
    <>
      <label for={props.htmlFor} className={props.labelClass}>
        {props.labelText} <span className={props.asterisk}>*</span>
      </label>
      <input
        id={props.inputId}
        name={props.inputName}
        type={props.inputType}
        className={props.inputClass}
        placeholder={props.inputPlaceholder}
        required={props.isRequired}
      />
    </>
  );
}

Input.defaultProps = {
  labelClass: "form__label",
  inputClass: "form__input",
  asterisk: "form--required",
};

export default Input;
