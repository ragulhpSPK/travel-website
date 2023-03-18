import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
// import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import "../styles/navbar.css";

const Appbar = () => {
  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "#000",
    fontSize: "22px",
    "&.active": {
      backgroundColor: "red",
      padding: 10,
      borderRadius: 5,
    },
  });
  return (
    <Navbar bg="light" expand="lg" className="text-bg-dark">
      <Container fluid className="navbarmain">
        <StyledLink
          to="/"
          className="text-primary fw-bold fs-5"
          style={{ paddingLeft: "10vw", paddingTop: "5vh" }}
          id="logoweb"
        >
          <Image
            src="./assets/logo1.png"
            alt="not found"
            style={{ width: "50px" }}
          />
          Travel Agency
        </StyledLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbtn" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end pe-3 backgroundbg"
        >
          <Nav style={{ paddingRight: "10vw", width: "50vw" }}>
            <StyledLink to="/" className="fw-bold ms-5">
              Home
            </StyledLink>
            <StyledLink to="service" className="fw-bold ms-5">
              Services
            </StyledLink>
            <StyledLink to="booking" className="fw-bold ms-5">
              Ticket Bookings
            </StyledLink>
            <StyledLink to="about" className="fw-bold ms-5">
              About
            </StyledLink>
            <StyledLink to="contact" className="fw-bold ms-5">
              Contact
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
