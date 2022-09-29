import React from "react";
import "./nav.scss";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navibar() {
  return (
    <Navbar bg="transparent">
      <Container>
        <Navbar.Brand>Harbord</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Provinces We Serve" id="basic-nav-dropdown">
              <NavDropdown.Item href="britishcolumbia">
                British Columbia
              </NavDropdown.Item>
              <NavDropdown.Item href="britishcolumbia">
                Alberta
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
