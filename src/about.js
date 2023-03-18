import React from "react";
import "./styles/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="body-container">
        <div className="card-container">
          <div
            className="about-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="face face1">
              <div className="content">
                <img
                  src="./assets/hotelbooking.png"
                  alt="not found"
                  style={{ width: "70px" }}
                />
                <h3>Hotel Booking</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do aliqua.
                </p>
              </div>
            </div>
          </div>
          <div
            className="about-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="face face1">
              <div className="about-content">
                <img
                  src="./assets/air2.png"
                  alt="not found"
                  style={{ width: "70px" }}
                />
                <h3>Air ticket</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  aliqua.
                </p>
              </div>
            </div>
          </div>

          <div
            className="about-card"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="face face1">
              <div className="about-content">
                <img
                  src="./assets/train.png"
                  alt="not found"
                  style={{ width: "70px" }}
                />
                <h3>Train ticket</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div
          className="content-box2"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <button>Read more</button>
        </div>
        <div
          className="img-box2"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <img src="./assets/about1.avif" alt="not found" />
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
}

export default About;
