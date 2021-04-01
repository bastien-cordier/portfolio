import React, { Fragment } from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Fragment>
      <section id="about" className="page-section bg-light">
        <Container>
          <h2 className="text-uppercase text-center">Qui suis-je ?</h2>

          <Row className="aboutme">
            <Col md={5}>
              <Image
                className="photo-profil"
                src="assets/photoprofil.JPG"
                alt="Photo Bastien CORDIER"
                roundedCircle
              />
            </Col>
            <Col md>
              <h3>"Bienvenue sur mon portfolio,</h3>
              <br />
              <h5>
                Actuellement en Mastère 1 Architecture Web et Big Data, j'occupe
                un poste de Développeur Full-Stack en alternance chez ERCOM
                Group THALES.
                <br />
                <br />
                Vous pouvez consulter mon profil en scrollant ou en téléchargant
                mon CV juste en dessous."
                <br />
              </h5>
              <br />
              <h6>
                <a href="/" class="button-about">
                  Téléchargez mon CV
                </a>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default About;
