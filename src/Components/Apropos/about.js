import React, { Fragment } from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Fragment>
      <section id="about" className="page-section bg-light text-center">
        <Container>
          <div className="text-center">
            <h2 className="text-uppercase">Qui suis-je ?</h2>
          </div>

          <Row className="aboutme">
            <Col md className="text-center">
              <Image
                className="photo-profil"
                src=""
                alt="Photo Bastien CORDIER"
                roundedCircle
              />
            </Col>
            <Col md></Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default About;
