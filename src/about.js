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
              <div className="about-content">
                <img
                  src="./assets/hotelbooking.png"
                  alt="not found"
                  style={{ width: "90px" }}
                />
                <h3>Hotel Booking</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  the perfect hotel for your next adventure with our wide
                  selection of options and competitive prices.
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
                  style={{ width: "90px" }}
                />
                <h3>Air ticket</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  We offer convenient air ticket booking services for your
                  travel needs.
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
                  style={{ width: "90px" }}
                />
                <h3>Train ticket</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="about-content">
                <p>
                  We offer seamless train ticket booking services to our
                  customers.
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
            We’re a worker-claimed travel organization secured by our qualities,
            trustworthiness, and commitment to client benefit. Our honor-winning
            organization reliably positions as a standout amongst other offices
            in the nation (Travel Weekly, Business Travel Weekly), and is the
            best individual from the renowned Signature Travel Network, an
            overall association enabling us to give our clients unmatched
            advantages. Fulfilled workers lead to fulfilled clients. We know the
            development and accomplishment of our organization rely on
            satisfying our customer’s needs each day. That is additionally our
            guarantee.
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
