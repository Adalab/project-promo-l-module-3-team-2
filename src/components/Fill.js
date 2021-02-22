import React from "react";
import "../stylesheets/layout/_fill.scss";

function Fill() {
  return (
    <form action="/signup" className="form" method="POST" name="fill-form">
      <fieldset className="fieldset data">
        <label for="name" className="form__label">
          Nombre completo <span className="form--required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form__input"
          placeholder="Ej: Mary Shelley"
          required
        />

        <label for="job" className="form__label">
          Puesto <span className="form--required">*</span>
        </label>
        <input
          id="job"
          name="job"
          type="text"
          className="form__input"
          placeholder="Ej: Master of creatures"
          required
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
        <label for="email" className="form__label">
          Email <span className="form--required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form__input"
          placeholder="Ej: mary.shelley@gmail.com"
          required
        />

        <label for="phone" className="form__label">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="form__input"
          placeholder="Ej: 666 66 66 66"
        />

        <label for="linkedin" className="form__label">
          Linkedin <span className="form--required">*</span>
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          className="form__input"
          placeholder="Ej: dr-frankenstein"
          required
        />

        <label for="github" className="form__label">
          GitHub <span className="form--required">*</span>
        </label>
        <input
          id="github"
          name="github"
          type="text"
          className="form__input"
          placeholder="Ej: frankensteins-monster"
          required
        />
        <label for="required-fields" className="form__label">
          <span className="form--required">*</span> Campos obligatorios
        </label>
      </fieldset>
    </form>
  );
}

export default Fill;
