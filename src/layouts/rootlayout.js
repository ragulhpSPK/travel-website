// import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";

export default function Rootlayouts() {
  return (
    <div>
      {/* <Container> */}
      <Appbar />
      <Outlet />
      <Footer />
      {/* </Container> */}
    </div>
  );
}
