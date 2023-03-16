import React from "react";
import logo from "./assets/travellogo1.png";
import "./styles/homesecondpage.css";
import revlogo from "./assets/rev04.png";

function HomeSecondpage() {
  return (
    <div className="home-second-page">
      <div className="total-content">
        <div className="heading">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            why You want book us
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
        </div>
        <div className="content-box">
          <div className="content">
            <img src={logo} alt="not found" style={{ width: "60px" }} />
            <h1>Safety Travel</h1>
            <p data-aos="zoom-out" data-aos-duration="2000">
              Travelling is an amazing way to learn a lot of things in life. A
              lot of people around the world travel every year to many places.
              Moreover, it is important to travel to humans. Some travel to
              learn more while some travel to take a break from their life.
            </p>
          </div>
          <div className="content">
            <img src={logo} alt="not found" style={{ width: "60px" }} />
            <h1>Book your trip</h1>
            <p data-aos="zoom-out" data-aos-duration="2000">
              Travelling is an amazing way to learn a lot of things in life. A
              lot of people around the world travel every year to many places.
              Moreover, it is important to travel to humans. Some travel to
              learn more while some travel to take a break from their life.
            </p>
          </div>
          <div className="content">
            <img src={logo} alt="not found" style={{ width: "60px" }} />
            <h1>Good Support</h1>
            <p data-aos="zoom-out" data-aos-duration="2000">
              Travelling is an amazing way to learn a lot of things in life. A
              lot of people around the world travel every year to many places.
              Moreover, it is important to travel to humans. Some travel to
              learn more while some travel to take a break from their life.
            </p>
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="packages">
        <div className="package-para">
          <h1>Travel packages</h1>
          <p>
            Travel brings power and love back into your life.So,Take only
            memories, leave only footprints...
          </p>
          <p>
            Your Travel package starts <br /> from:
            <span>$56</span>
          </p>
        </div>
        <button> For more details</button>
      </div>
      <div className="review-section">
        <div className="first-section">
          <p>Give your reviews,How you all enjoy our transport service...</p>
        </div>
        <div className="second-section">
          <img src={revlogo} alt="Not found" />
        </div>
      </div>
    </div>
  );
}

export default HomeSecondpage;