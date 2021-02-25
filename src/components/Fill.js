import React from "react";
import "../stylesheets/layout/_fill.scss";
import Input from "./Input";

function Fill() {
  return (
    <form action="/signup" className="form" method="POST" name="fill-form">
      <fieldset className="fieldset data">
        <Input
          htmlFor="name"
          labelText="Nombre completo"
          inputId="name"
          inputName="name"
          inputType="text"
          inputPlaceholder="Ej: Mary Shelley"
          isRequired="true"
        />
        <Input
          htmlFor="job"
          labelText="Puesto"
          inputId="job"
          inputName="job"
          inputType="text"
          inputPlaceholder="Ej: Master of creatures"
          isRequired="true"
        />
      </fieldset>

      <fieldset className="fieldset">
        <label for="photo" className="form__label">
          Imagen de perfil <span className="form--required">*</span>
        </label>
        <div className="form__label-div">
          <button className="form__label--bt">Añadir imagen</button>
          <input id="photo" name="photo" type="file" className="hidden" />
          <div className="form__img--container"></div>
        </div>
      </fieldset>
      <fieldset className="fieldset social">
        <Input
          htmlFor="email"
          labelText="Email"
          inputId="email"
          inputName="email"
          inputType="email"
          inputPlaceholder="Ej: mary.shelley@gmail.com"
          isRequired="true"
        />
        <Input
          htmlFor="phone"
          labelText="Teléfono"
          inputId="phone"
          inputName="phone"
          inputType="tel"
          inputPlaceholder="Ej: 666 66 66 66"
        />
        <Input
          htmlFor="linkedin"
          labelText="Linkedin"
          inputId="linkedin"
          inputName="linkedin"
          inputType="text"
          inputPlaceholder="Ej: dr-frankenstein"
          isRequired="true"
        />
        <Input
          htmlFor="github"
          labelText="GitHub"
          inputId="github"
          inputName="github"
          inputType="text"
          inputPlaceholder="Ej: frankensteins-monster"
          isRequired="true"
        />
        <label for="required-fields" className="form__label">
          <span className="form--required">*</span> Campos obligatorios
        </label>
      </fieldset>
    </form>
  );
}

export default Fill;
