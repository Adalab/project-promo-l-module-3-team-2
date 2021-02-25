import React from 'react';

function Input(props) {
  return (
    <input
      id={props.inputId}
      name={props.inputName}
      type={props.inputType}
      className={props.inputClass}
      placeholder={props.inputPlaceholder}
      required={props.isRequired}
    />
  );
}

Input.defaultProps = {
  inputClass: 'form__input',
};

export default Input;
