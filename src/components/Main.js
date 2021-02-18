import React from "react";
import "../stylesheets/layout/_card.scss";
import "../stylesheets/layout/_fill.scss";
import "../stylesheets/layout/_collapsable-header.scss";
import "../stylesheets/layout/_desing.scss";
import "../stylesheets/layout/_page.scss";
function Main() {
  return (
    <div className="bg__container">
      <main className="main--flex">
        <div className="bg__container--card">
          <section className="card">
            <div className="card__container wrapper">
              <button className="card__reset js-reset" type="reset">
                <i className="far fa-trash-alt"></i> Reset
              </button>
              <article className="card__data js-card">
                <h2 className="card__data--title name js-preview-name">
                  Nombre Apellido
                </h2>
                <h3 className="card__data--title job js-preview-job">
                  Front-end developer
                </h3>
                <div className="card__data--img js__profile-image js-preview-photo"></div>
                <ul className="card__data--list">
                  <li className="circle">
                    <a
                      href="555 333 222"
                      className="card__data--icon phone js-preview-phone"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li className="circle">
                    <a
                      href="mailto:username@example.com"
                      className="card__data--icon email js-preview-email"
                      target="_blank"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li className="circle">
                    <a
                      href="www.myLinkedIn.com"
                      className="card__data--icon linkedin js-preview-linkedin"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="circle">
                    <a
                      href="www.myGitHub.com"
                      className="card__data--icon github js-preview-github"
                      target="_blank"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
        <div className="bg__container--design">
          <div className="main__pageContainer">
            <section className="js-collapsable">
              <h2
                className="article article__title collapsable__header"
                title="@@titleh2"
              >
                <span className="article__icon far fa-object-ungroup"></span>
                {/* {@@title} {@@iconImg} */}
                <span className="article__title">Diseña</span>
                <span className="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
              </h2>
              {/* COLAPASABLE DISEÑA -- pendiente aclarar que hacer con el @@ cuando hagamos componentes */}
              {/* <include
                  src="./collapsable-header.html"
                  title="Diseña"
                  iconImg="far fa-object-ungroup"
                  titleh2=""
                ></include> */}

              <div className="design collapsable__container">
                <h2 className="design__title">Colores</h2>

                <div className="design__colorcontainer">
                  <label className="design__squareLabel">
                    <input
                      className="js-palette"
                      type="radio"
                      name="palette"
                      value="0"
                      checked
                    />
                    <ul className="palette-0">
                      <li className="design__squareColor color-1"></li>
                      <li className="design__squareColor color-2"></li>
                      <li className="design__squareColor color-3"></li>
                    </ul>
                  </label>

                  <label className="design__squareLabel">
                    <input
                      className="js-palette"
                      type="radio"
                      name="palette"
                      value="1"
                    />
                    <ul className="palette-1">
                      <li className="design__squareColor color-1"></li>
                      <li className="design__squareColor color-2"></li>
                      <li className="design__squareColor color-3"></li>
                    </ul>
                  </label>

                  <label className="design__squareLabel">
                    <input
                      className="js-palette"
                      type="radio"
                      name="palette"
                      value="2"
                    />
                    <ul className="palette-2">
                      <li className="design__squareColor color-1"></li>
                      <li className="design__squareColor color-2"></li>
                      <li className="design__squareColor color-3"></li>
                    </ul>
                  </label>
                </div>
              </div>
            </section>

            <section className="js-collapsable collapsed">
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
                    <span className="form--required">*</span> Campos
                    obligatorios
                  </label>
                </fieldset>
              </form>
            </section>

            <section className="js-collapsable collapsed">
              <h2
                className="article article__title collapsable__header"
                title="@@titleh2"
              >
                <span className="article__icon @@iconImg"></span>
                <span className="article__title">Comparte</span>
                <span className="fas fa-chevron-up article__icon--collapsible collapsable__header--arrow"></span>
              </h2>

              {/* COMPARTE  */}
              {/* <include
                  src="./collapsable-header.html"
                  title="Comparte"
                  iconImg="fas fa-share-alt"
                  titleh2=""
                ></include> */}

              <div className="share collapsable__container">
                <button type="submit" className="share__button js-share-btn">
                  <i className="far fa-id-card"></i>
                  <span className="share__button--text"> Crear tarjeta </span>
                </button>
                <div className="shareclick hidden-share js-twitter-share">
                  <h3 className="shareclick__title">
                    La tarjeta ha sido creada:
                  </h3>
                  <p className="shareclick__text js-card-link"></p>

                  <button
                    type="button"
                    className="shareclick__twitter js-twitter-btn"
                  >
                    <i className="fab fa-twitter"></i>
                    <a
                      href=""
                      className="js-twitter-link shareclick__twitter--text"
                      data-show-count="false"
                      target="_blank"
                    >
                      Compartir en twitter
                    </a>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
