import React, { Fragment } from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Fragment>
      <section id="about" className="page-section bg-about">
        <Container>
          <h2 className="text-center">wh0amI ?</h2>

          <Row className="aboutme">
            <Col md={1}></Col>
            <Col md={4}>
              <Image
                className="photo-profil"
                src="assets/profil.png"
                alt="Photo Bastien CORDIER"
                roundedCircle
              />
            </Col>
            <Col md>
              <div className="intro text">
                <div className="iOSMessage presentation">
                  <h5>
                    Bienvenue sur mon portfolio, actuellement en Mastère 1
                    Architecture Web et Big Data, j'occupe un poste de
                    Développeur Full-Stack en alternance chez ERCOM Group
                    THALES.
                    <br />
                    <br />
                    Vous pouvez consulter mon profil en continuant à naviguer
                    sur cette page ou en téléchargant mon CV juste en dessous.
                    <br />
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <h6 className="text-center">
            <a
              href="assets/CV-Bastien-CORDIER.pdf"
              class="button-about"
              target="_blank"
            >
              Téléchargez mon CV
            </a>
          </h6>
        </Container>
      </section>
    </Fragment>
  );
}

export default About;
