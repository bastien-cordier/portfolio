import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import './header.css'

function Header() {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="#161616"
        sticky="top"
        variant="dark"
      >
        <Navbar.Brand>
          <a href="/" className="title-portfolio nav-link">
            Portfolio Bastien CORDIER
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/nouveautes">À propos</Nav.Link>
            <Nav.Link href="/nouveautes">Parcours</Nav.Link>
            <Nav.Link href="/nouveautes">Formations</Nav.Link>
            <Nav.Link href="/nouveautes">Compétences</Nav.Link>
            <Nav.Link href="/nouveautes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default Header;
