import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
        <Navbar.Brand>
          <a href="#accueil" className="title-portfolio nav-link js-scrollTo">
            Portfolio Bastien CORDIER
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about" className="js-scrollTo">
              À propos
            </Nav.Link>
            <Nav.Link href="#formation" className="js-scrollTo">
              Formations
            </Nav.Link>
            <Nav.Link href="#parcours" className="js-scrollTo">
              Parcours
            </Nav.Link>
            <Nav.Link href="/nouveautes" className="js-scrollTo">
              Compétences
            </Nav.Link>
            <Nav.Link href="/nouveautes" className="js-scrollTo">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Header;
