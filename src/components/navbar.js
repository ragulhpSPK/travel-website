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
    fontSize: "18px",
    "&.active": {
      backgroundColor: "red",
      padding: 10,
      borderRadius: 5,
    },

    //    "&:hover" :{
    //   background: none;
    // }
  });
  return (
    <Navbar bg="light" expand="lg" style={{ height: "70px" }}>
      <Container>
        <Navbar.Brand href="#home" className="text-dark fw-bold fs-5">
          <Image
            src="./assets/logo1.png"
            alt="Not found"
            style={{ width: "60px" }}
            id='logo'
          />
          Travel Agency
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navbar">
            <StyledLink to="/" className="fw-bold ms-5">
              Home
            </StyledLink>
            <StyledLink to="service" className="fw-bold ms-5">
              Services
            </StyledLink>
            <StyledLink to="booking" className="fw-bold ms-5">
              Book Your order
            </StyledLink>
            <StyledLink to="about" className="fw-bold ms-5">
              About
            </StyledLink>
            <StyledLink to="contact" className="fw-bold ms-5">
              Contact us
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
