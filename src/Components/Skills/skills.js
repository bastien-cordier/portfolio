import React, { Fragment } from "react";
import "./skills.css";
import Container from "react-bootstrap/Container";
import { Tab, Row, Col, Nav } from "react-bootstrap";

function skills() {
  return (
    <Fragment>
      <section id="skills" className="page-section">
        <h2 className="text-uppercase text-center">Mes_c0mpétences</h2>
        <br />
        <Container className="tabs">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm></Col>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Programmation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">CMS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">UX /UI</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">OS</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content className="logos-tabs">
                  <Tab.Pane eventKey="first">
                    <i className="fab fa-html5 fa-4x space-content" />
                    <i className="fab fa-css3-alt fa-4x space-content" />
                    <i className="fab fa-php fa-4x space-content" />
                    <i className="fab fa-js-square fa-4x space-content" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <i className="fab fa-bootstrap fa-4x space-content" />
                    <i className="fab fa-react fa-4x space-content" />
                    <i className="fab fa-vuejs fa-4x space-content" />
                    <i className="fab fa-symfony fa-4x space-content" />
                    <i className="fab fa-node-js fa-4x space-content" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <i className="fab fa-wordpress fa-4x space-content" />
                    <i className="fab fa-drupal fa-4x space-content" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
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
                    <span className="space-content" />
                    <img
                      src="assets/tabs/canva-logo.png"
                      alt="logoCanva"
                      className="logo"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <span className="space-content" />
                    <img
                      src="assets/tabs/macos.png"
                      alt="logoCanva"
                      className="logo"
                    />
                    <span className="space-content" />
                    <img
                      src="assets/tabs/windows.png"
                      alt="logoCanva"
                      className="logo"
                    />
                    <span className="space-content" />
                    <img
                      src="assets/tabs/ubuntu.png"
                      alt="logoCanva"
                      className="logo"
                    />
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
