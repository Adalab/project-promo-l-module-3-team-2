import React from 'react';
import '../stylesheets/layout/_fill.scss';

function Fill() {
  return (
    <section className="js-collapsable">
      {/* //agregar clase collapsed dentro de esta section// */}
      <h2
        className="article article__title collapsable__header"
        title="@@titleh2"
      >
        <span className="article__icon @@iconImg"></span>
        <span className="article__title">Rellena</span>
        <span className="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
      </h2>

      {/* COLAPASABLE RELLENA -- pendiente aclarar que hacer con el @@ cuando hagamos componentes */}
      {/* <include
                      src="./collapsable-header.html"
                      titleh2="Rellena el formulario con tus datos"
                      title="Rellena"
                      iconImg="far fa-keyboard"
                    ></include> */}

      <form
        action="/signup"
        className="form collapsable__container js-form"
        method="POST"
        name="fill-form"
      >
        <fieldset className="fieldset data">
          <label for="name" className="form__label">
            Nombre completo <span className="form--required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form__input js-name js-input-text"
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
            className="form__input js-job js-input-text"
            placeholder="Ej: Master of creatures"
            required
          />
        </fieldset>

        <fieldset className="fieldset">
          <label for="photo" className="form__label">
            Imagen de perfil <span className="form--required">*</span>
          </label>
          <div className="form__label-div">
            <button className="form__label--bt js__profile-trigger">
              Añadir imagen
            </button>
            <input
              id="photo"
              name="photo"
              type="file"
              className="js__profile-upload-btn hidden js-input-text"
            />
            <div className="form__img--container js__profile-preview js-photo"></div>
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
            className="form__input js-email js-input-text"
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
            className="form__input js-phone js-input-text"
            placeholder="Ej: 666 66 66 66"
          />

          <label for="linkedin" className="form__label">
            Linkedin <span className="form--required">*</span>
          </label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            className="form__input js-linkedin js-input-text"
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
            className="form__input js-github js-input-text"
            placeholder="Ej: frankensteins-monster"
            required
          />
          <label for="required-fields" className="form__label">
            <span className="form--required">*</span> Campos obligatorios
          </label>
        </fieldset>
      </form>
    </section>
  );
}

export default Fill;
