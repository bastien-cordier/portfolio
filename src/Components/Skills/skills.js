import React, { Fragment } from "react";
import "./skills.css";
import Container from "react-bootstrap/Container";
import { Tab, Row, Col, Nav } from "react-bootstrap";

function skills() {
  return (
    <Fragment>
      <section id="skills" className="page-section">
        <h2 className="text-uppercase text-center">Mes compétences</h2>
        <br />
        <Container className="tabs">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Développement</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">UX /UI</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Environnement</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <i className="fab fa-wordpress fa-4x space-content" />
                    <i className="fab fa-drupal fa-4x space-content" />
                    <i className="fab fa-html5 fa-4x space-content" />
                    <i className="fab fa-css3-alt fa-4x space-content" />
                    <i className="fab fa-bootstrap fa-4x space-content" />
                    <i className="fab fa-php fa-4x space-content" />
                    <br />
                    <br />
                    <i className="fab fa-js-square fa-4x space-content" />
                    <i className="fab fa-react fa-4x space-content" />
                    <i className="fab fa-vuejs fa-4x space-content" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <span className="space-content" />
                    <img
                      src="assets/tabs/adobexd.svg"
                      alt="logoXD"
                      className="logo"
                    />
                    <span className="space-content" />
                    <img
                      src="assets/tabs/figma.svg"
                      alt="logoFigma"
                      className="logo"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    Les soirées de samedi soir qq fois ça me déçoit
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </Fragment>
  );
}

export default skills;
