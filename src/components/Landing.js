import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <main className='page__main'>
            <div className='page__container'>
                <img
                    className='page__img fly-in-top'
                    src='./assets/images/title-creatures.svg'
                    alt='Awesome profile-cards'
                />
                <h1 className='page__title'>Crea tu tarjeta de visita</h1>
                <p className='page__text'>
                    Crea mejores contactos profesionales de forma fácil y cómoda
				</p>
                <ul className='page__list'>
                    <li className='page__list--item'>
                        <i className='far fa-object-ungroup page__list--icon'></i> Diseña
					</li>
                    <li className='page__list--item'>
                        <i className='far fa-keyboard page__list--icon'></i> Rellena
					</li>
                    <li className='page__list--item'>
                        <i className='fas fa-share-alt page__list--icon'></i> Comparte
					</li>
                </ul>
                <Link to="/cardgenerator" className="className='page__link fly-in-bottom">Comenzar</Link>

            </div>
        </main>
    );
};

export default Landing;
