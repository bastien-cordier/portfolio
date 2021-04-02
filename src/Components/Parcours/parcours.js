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
                    <img src="assets/ercom.png" alt="" />
                  </span>
                  <span class="username">ERCOM Group Thales</span>
                </div>
                <div className="timeline-content">
                  <h5>
                    <i class="fa fa-briefcase text-success fa-fw" />
                    Développeur Web Junior
                  </h5>
                  <h6>
                    <i class="fa fa-map-marker text-danger fa-fw" />
                    Vélizy-Villacoublay
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
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-time">
                <span class="date">24 February 2014</span>
                <span class="time">08:17</span>
              </div>
              <div class="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div class="timeline-body">
                <div class="timeline-header">
                  <span className="userimage">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                  </span>
                  <span class="username">Richard Leong</span>
                  <span class="pull-right text-muted">1,282 Views</span>
                </div>
                <div class="timeline-content">
                  <p class="lead">
                    <i class="fa fa-quote-left fa-fw pull-left"></i>
                    Quisque sed varius nisl. Nulla facilisi. Phasellus consequat
                    sapien sit amet nibh molestie placerat. Donec nulla quam,
                    ullamcorper ut velit vitae, lobortis condimentum magna.
                    Suspendisse mollis in sem vel mollis.
                    <i class="fa fa-quote-right fa-fw pull-right"></i>
                  </p>
                </div>
                <div class="timeline-footer">
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
                  </a>
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
                  </a>
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-time">
                <span class="date">10 January 2014</span>
                <span class="time">20:43</span>
              </div>
              <div class="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>
              <div class="timeline-body">
                <div class="timeline-header">
                  <span className="userimage">
                    <img src="" alt="" />
                  </span>
                  <span class="username">Lelouch Wong</span>
                  <span class="pull-right text-muted">1,021,282 Views</span>
                </div>
                <div class="timeline-content">
                  <h4 class="template-title">
                    <i class="fa fa-map-marker text-danger fa-fw"></i>
                    795 Folsom Ave, Suite 600 San Francisco, CA 94107
                  </h4>
                  <p>
                    In hac habitasse platea dictumst. Pellentesque bibendum id
                    sem nec faucibus. Maecenas molestie, augue vel accumsan
                    rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.
                  </p>
                  <p class="m-t-20">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                  </p>
                </div>
                <div class="timeline-footer">
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like
                  </a>
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment
                  </a>
                  <a href="/" class="m-r-15 text-inverse-lighter">
                    <i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-icon">
                <a href="/">&nbsp;</a>
              </div>

              <div class="timeline-body">Loading...</div>
            </li>
          </ul>
        </Container>
      </section>
    </Fragment>
  );
}

export default parcours;
