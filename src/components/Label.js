import React from 'react';

function Label(props) {
  return (
    <label for={props.htmlFor} className={props.labelClass}>
      {props.labelText}{' '}
      <span className={props.asteriskClass}>{props.asterisk}</span>
    </label>
  );
}

Label.defaultProps = {
  labelClass: 'form__label',
  asteriskClass: 'form--required',
  asterisk: '*',
  required: true,
};

export default Label;
