import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo from "../assets/logo1.png";

const Appbar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ height: "70px" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-dark fw-bold fs-5">
          <Image src={logo} alt="Not found" style={{ width: "60px" }} />
          Travel Agency
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="fw-bold ms-5">
              Home
            </Nav.Link>
            <Nav.Link href="#product" className="fw-bold ms-5">
              Services
            </Nav.Link>
            <Nav.Link href="#best" className="fw-bold ms-5">
              Book Your order
            </Nav.Link>
            <Nav.Link href="#orders" className="fw-bold ms-5">
              About
            </Nav.Link>
            <Nav.Link href="#detail" className="fw-bold ms-5">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
