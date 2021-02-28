import React from "react";
import "../stylesheets/layout/_fill.scss";
import Input from "./Input";
import Label from "./Label";
import PhotoPreview from "./PhotoPreview";

function Fill(props) {
  return (
    <form action="/signup" className="form" method="POST" name="fill-form">
      <fieldset className="fieldset data">
        <Label htmlFor="name" labelText="Nombre completo" />
        <Input
          inputId="name"
          inputName="name"
          inputType="text"
          inputPlaceholder="Ej: Mary Shelley"
          handleInput={props.handleInput}
        />

        <Label htmlFor="job" labelText="Puesto" />
        <Input
          inputId="job"
          inputName="job"
          inputType="text"
          inputPlaceholder="Ej: Master of creatures"
          handleInput={props.handleInput}
        />
      </fieldset>

      <fieldset className="fieldset">
        <Label htmlFor="photo" labelText="Imagen de perfil" />
        <PhotoPreview />
      </fieldset>
      <fieldset className="fieldset social">
        <Label htmlFor="email" labelText="Email" />
        <Input
          inputId="email"
          inputName="email"
          inputType="email"
          inputPlaceholder="Ej: mary.shelley@gmail.com"
          handleInput={props.handleInput}
        />
        <Label htmlFor="phone" labelText="Teléfono" />
        <Input
          inputId="phone"
          inputName="phone"
          inputType="tel"
          inputPlaceholder="Ej: 666 66 66 66"
          required=""
          asterisk=""
          handleInput={props.handleInput}
        />
        <Label htmlFor="linkedin" labelText="Linkedin" />
        <Input
          inputId="linkedin"
          inputName="linkedin"
          inputType="text"
          inputPlaceholder="Ej: dr-frankenstein"
          handleInput={props.handleInput}
        />
        <Label htmlFor="github" labelText="GitHub" />
        <Input
          inputId="github"
          inputName="github"
          inputType="text"
          inputPlaceholder="Ej: frankensteins-monster"
          handleInput={props.handleInput}
        />
        <label htmlFor="required-fields" className="form__label">
          <span className="form--required">*</span> Campos obligatorios
        </label>
      </fieldset>
    </form>
  );
}

export default Fill;
