import React from 'react'
import './accueil.css'

function Accueil() {
    return (
        <section className="masthead" id="accueil">
            <div className="container">
                    <div className="masthead-heading">Bastien CORDIER</div>
                    <div className="masthead-subheading">Développeur Web <span
                        className="txt-rotate"
                        data-period="2100"
                        data-rotate='[ "Front-End.", "Back-End.", "de qualité.", "recommandé par la NASA." ]'></span>
                    </div>
                    <a href="#about" className="button js-scrollTo">
                        <div className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                    </a>
                </div>
        </section>
    )
}

export default Accueil
