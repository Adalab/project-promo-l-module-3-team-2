import React from 'react';
import Button from './Button';
import Input from './Input';

function PhotoPreview(props) {
  return (
    <div className="form__label-div">
      <Button buttonClass="form__label--bt" buttonText="Añadir imagen" />
      <Input
        inputId="photo"
        inputName="photo"
        inputType="file"
        inputClass="hidden"
        inputPlaceholder=""
        isRequired="true"
      />
      <div className="form__img--container"></div>
    </div>
  );
}

export default PhotoPreview;
