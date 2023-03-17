import React from "react";
import "./styles/service.css";

function Service() {
  return (
    <div className="main">
      <div className="service-box">
        <h2
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Our Services
        </h2>
        <div className="container">
          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-globe"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>World Wide</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>

          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-fire"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>Camp fire</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>

          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-headset"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>24/7</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>

          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-buildings"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>Affordable hotels</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>

          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-globe"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>Trekking</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>

          <div className="cardbx" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
            <div className="lines"></div>
            <div className="imgBx">
              <i
                class="bi bi-globe"
                style={{
                  fontSize: "50px",
                  color: "green",
                }}
              ></i>
            </div>
            <div className="content">
              <div className="content-info">
                <h1>Tour Guide</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="s">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
