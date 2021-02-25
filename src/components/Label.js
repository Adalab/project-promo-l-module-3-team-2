import React from 'react';

function Label(props) {
  return (
    <label for={props.htmlFor} className={props.labelClass}>
      {props.labelText} <span className={props.asterisk}>*</span>
    </label>
  );
}

Label.defaultProps = {
  labelClass: 'form__label',
  asterisk: 'form--required',
};

export default Label;
