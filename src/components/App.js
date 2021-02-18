//import "../stylesheets/App.scss";

import logoAdalab from "../images/logo-adalab.png";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <>
      <Header />
      <Main />
      <footer className="footer">
        <div className="footer__container">
          <small className="footer__copyright">
            Awesome profile-cards &copy; 2021
          </small>
          <a
            className="footer__link"
            href="http://www.adalab.es"
            target="_blank"
            title="Ir a web de Adalab"
          >
            <img className="footer__img" src={logoAdalab} alt="Logo Adalab" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
