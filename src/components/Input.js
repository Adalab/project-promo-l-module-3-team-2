import React from 'react';

function Input(props) {
  const handleInputChange = (ev) => {
    props.handleInput({
      inputName: ev.target.name,
      inputValue: ev.target.value,
    });
  };

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

Input.defaultProps = {
  inputClass: 'form__input',
};

export default Input;
