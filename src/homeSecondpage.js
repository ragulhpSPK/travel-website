import React from "react";
import "./styles/homesecondpage.css";

function HomeSecondpage() {
  return (
    <div className="home-second-page">
      <div className="total-content">
        <div className="heading">
          <h1 data-aos="fade-right" data-aos-duration="1000">
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
            <img
              src="./assets/travellogo1.png"
              alt="not found"
              style={{ width: "60px" }}
            />
            <h1>Safety Travel</h1>
            <p data-aos="zoom-out" data-aos-duration="1000">
              Provide users with comprehensive safety information and resources,
              including tips on staying safe while traveling and how to respond
              to emergencies. Offer up-to-date travel advisories and alerts, so
              users can make informed decisions about their travel plans.
            </p>
          </div>
          <div className="content">
            <img
              src="./assets/ticketbook.png"
              alt="not found"
              style={{ width: "80px" }}
            />
            <h1>Book your trip</h1>
            <p data-aos="zoom-out" data-aos-duration="1000">
              Provide users with an easy-to-use booking system for flights,
              accommodations, tours, and activities to simplify the trip
              planning process. Offer competitive prices, special deals, and
              discounts to attract price-sensitive users and encourage repeat
              bookings.
            </p>
          </div>
          <div className="content">
            <img
              src="./assets/support.png"
              alt="not found"
              style={{ width: "60px" }}
            />
            <h1>Good Support</h1>
            <p data-aos="zoom-out" data-aos-duration="1000">
              Provide detailed maps and directions, weather information, and
              travel alerts to ensure users have a positive experience. By
              offering useful support content, you can establish your travel
              website as a reliable and trustworthy resource, and help users
              make the most of their travels.
            </p>
          </div>
        </div>
      </div>
      {/* packages */}
      <div className="packages">
        <div className="package-para">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            Travel packages
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Travel brings power and love back into your life.So,Take only
            memories, leave only footprints...
          </p>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Your Travel package starts <br /> from:
            <span data-aos="zoom-in" data-aos-duration="1000">
              $56
            </span>
          </p>
        </div>
        <button data-aos="zoom-in" data-aos-duration="1000">
          For more details
        </button>
      </div>
      <div className="review-section">
        <div className="first-section">
          <p data-aos="fade-right" data-aos-duration="1000">
            Give your reviews,How you all enjoy our transport service...
          </p>
        </div>
        <div className="second-section">
          <img
            src="./assets/rev04.png"
            alt="Not found"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSecondpage;
