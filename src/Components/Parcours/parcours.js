import React, { Fragment } from "react";
import "./parcours.css";
import Container from "react-bootstrap/Container";

function parcours() {
  return (
    <Fragment>
      <section id="parcours" className="page-section bg-light">
        <h2 className="text-uppercase text-center">Mon parcours</h2>
        <br />
        <Container>
          <ul className="timeline">
            <li>
              <div className="timeline-time">
                <span className="date">Alternance 3 semaines / mois</span>
                <span className="time">2020 - 2022</span>
              </div>
              <div className="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage">
                    <img src="assets/companies/ercom.png" alt="" />
                  </span>
                  <span class="username">ERCOM Group Thales</span>
                </div>
                <div className="timeline-content">
                  <h5>
                    <i className="fa fa-briefcase text-secondary fa-fw" />
                    <span className="space-content">
                      Développeur Web Junior
                    </span>
                  </h5>
                  <h6>
                    <i className="fa fa-map-marker text-danger fa-fw" />
                    <span className="space-content">Vélizy-Villacoublay</span>
                  </h6>
                  <ul>
                    <li>
                      Développement en autonomie du site ERCOM et de son
                      intranet.
                    </li>
                    <li>
                      Participation à la refonte graphique et technique du site
                      internet ERCOM.
                    </li>
                    <li>Utilisation des CMS WordPress puis Drupal.</li>
                  </ul>
                  <br />
                  <div className="timeline-footer">
                    <h6>
                      Technos utilisées :{" "}
                      <span className="icons">
                        <i className="fab fa-wordpress" />
                        <i className="fab fa-drupal space-content" />
                        <i className="fab fa-html5 space-content" />
                        <i className="fab fa-css3-alt space-content" />
                        <i className="fab fa-js-square space-content" />
                        <i className="fab fa-php space-content" />
                        <i className="fab fa-symfony space-content" />
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">Alternance 1 semaine / 1 semaine</span>
                <span className="time">2019 - 2020</span>
              </div>
              <div className="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage">
                    <img src="assets/companies/stockpro.png" alt="" />
                  </span>
                  <span class="username">STOCKPRO SAS</span>
                </div>
                <div className="timeline-content">
                  <h5>
                    <i className="fa fa-briefcase text-secondary fa-fw" />
                    <span className="space-content">
                      Développeur Mobile Junior et testeur QA
                    </span>
                  </h5>
                  <h6>
                    <i className="fa fa-map-marker text-danger fa-fw" />
                    <span className="space-content">Paris</span>
                  </h6>
                  <ul>
                    <li>
                      Participation au développement d'une application mobile
                      pour la gestion de stock des entreprises du BTP.
                    </li>
                    <li>Tests QA de l'application.</li>
                    <li>Utilisation de Swift iOS.</li>
                    <li>Appels de prospection / Rendez-vous clients.</li>
                  </ul>
                  <br />
                  <div className="timeline-footer">
                    <h6>
                      Technos utilisées :{" "}
                      <span className="icons">
                        <i className="fab fa-swift" />
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">Alternance 1 semaine / 1 semaine</span>
                <span className="time">2018 - 2019</span>
              </div>
              <div className="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage">
                    <img src="assets/companies/2bo&co.png" alt="" />
                  </span>
                  <span class="username">2BO&CO</span>
                </div>
                <div className="timeline-content">
                  <h5>
                    <i className="fa fa-briefcase text-secondary fa-fw" />
                    <span className="space-content">
                      Intégrateur Web Junior
                    </span>
                  </h5>
                  <h6>
                    <i className="fa fa-map-marker text-danger fa-fw" />
                    <span className="space-content">Paris</span>
                  </h6>
                  <ul>
                    <li>
                      Création de plusieurs sites web pour le groupe "Bistrots
                      pas parisiens".
                    </li>
                    <li>
                      Utilisations de nombreux langages de développement.
                      (HTML5/CSS3, JavaScript) et d'un framework
                      intra-entreprise.
                    </li>
                    <li>
                      Mise en page, mise à jour de contenu, traitement de la
                      base de données, animations d'éléments en JavaScript.
                    </li>
                    <li>Audits sites internet.</li>
                  </ul>
                  <br />
                  <div className="timeline-footer">
                    <h6>
                      Technos utilisées :{" "}
                      <span className="icons">
                        <i className="fab fa-wordpress" />
                        <i className="fab fa-html5 space-content" />
                        <i className="fab fa-css3-alt space-content" />
                        <i className="fab fa-bootstrap space-content" />
                        <i className="fab fa-php space-content" />
                        <i className="fas fa-database space-content" />
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">Stage 6 semaines</span>
                <span className="time">Mai - Juin 2018</span>
              </div>
              <div className="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage">
                    <img src="assets/companies/bouygues-it.png" alt="" />
                  </span>
                  <span class="username">STRUCTIS Group BOUYGUES</span>
                </div>
                <div className="timeline-content">
                  <h5>
                    <i className="fa fa-briefcase text-secondary fa-fw" />
                    <span className="space-content">
                      Développeur d'applications Web
                    </span>
                  </h5>
                  <h6>
                    <i className="fa fa-map-marker text-danger fa-fw" />
                    <span className="space-content">Guyancourt</span>
                  </h6>
                  <ul>
                    <li>
                      Création d'une application web pour gérer le flux des
                      visiteurs sur le lieu de l'entreprise.
                    </li>
                    <li>
                      Formulaires, connexion à la base de données, lecture d'un
                      QR Code.
                    </li>
                    <li>Etude de la technologie QR Code</li>
                  </ul>
                  <br />
                  <div className="timeline-footer">
                    <h6>
                      Technos utilisées :{" "}
                      <span className="icons">
                        <i className="fab fa-html5 space-content" />
                        <i className="fab fa-css3-alt space-content" />
                        <i className="fab fa-php space-content" />
                        <i className="fab fa-java space-content" />
                        <i className="fas fa-qrcode space-content" />
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Container>
      </section>
    </Fragment>
  );
}

export default parcours;
