import React from "react";

function Input(props) {
  const handleInput = (ev) => {
    props.handleInput(ev.target.id, ev.target.value);
  };

  return (
    <input
      id={props.inputName}
      name={props.inputName}
      type={props.inputType}
      className={props.inputClass}
      placeholder={props.inputPlaceholder}
      required={props.required}
      onChange={handleInput}
      value={props.inputValue}
    />
  );
}

Input.defaultProps = {
  inputClass: "form__input",
  required: true,
};

export default Input;
