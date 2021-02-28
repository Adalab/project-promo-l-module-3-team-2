import React from "react";

function Input(props) {
  /*
  const handleInputChange = (ev) => {
    props.handleInput({
      inputName: ev.target.name,
      inputValue: ev.target.value,
    });
  };*/

  function handleInputChange(ev) {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    props.sendInput(inputName, inputValue);
  }

  return (
    <input
      id={props.inputId}
      name={props.inputName}
      type={props.inputType}
      className={props.inputClass}
      placeholder={props.inputPlaceholder}
      required={props.isRequired}
      onChange={handleInputChange}
      value={props.value}
    />
  );
}

export default Input;
