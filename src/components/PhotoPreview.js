import React from 'react';
import Button from './Button';

function PhotoPreview(props) {
  return (
    <div className="form__label-div">
      <Button buttonclassName="form__label--bt" buttonText="Añadir imagen" />
      <input id="photo" name="photo" type="file" className="hidden" required />

      <div className="form__img--container"></div>
    </div>
  );
}

export default PhotoPreview;
