import React from "react";
import "./styles/booking.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rooms from "./rooms";
import { placeContent } from "./helper/placesContent";

function Booking() {
  return (
    <div className="book_container">
      <div className="booking_box">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          Book Your Dream Place
        </h1>
        <form
          className="form_controller"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <label htmlFor="name">
            Name
            <br />
            {/* <input type="text" placeholder="Enter your name" id="name" /> */}
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-success w-full max-w-xs"
              id="name"
            />
          </label>
          <label htmlFor="number">
            Phone number
            <br />
            {/* <input type="number" placeholder="Enter your number" id="number" /> */}
            <input
              type="text"
              placeholder="Enter your number"
              id="number"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>
          <label htmlFor="email">
            Email
            <br />
            {/* <input type="email" placeholder="Enter your email" id="email" /> */}
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          <label htmlFor="address">
            Address
            <br />
            {/* <input type="text" placeholder="Enter your address" id="address" /> */}
            <input
              type="text"
              placeholder="Enter your address"
              id="address"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          <label htmlFor="place">
            Where to
            <br />
            {/* <input type="text" placeholder="Enter place" id="place" /> */}
            <input
              type="text"
              placeholder="Enter place"
              id="place"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          <label htmlFor="guest">
            How Many
            <br />
            {/* <input type="text" placeholder="Number of guests" id="guest" /> */}
            <input
              type="text"
              placeholder="Number of guests"
              id="guest"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          <label htmlFor="book">
            Booking
            <br />
            {/* <input type="date" id="book" /> */}
            <input
              type="date"
              id="book"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>

          <label htmlFor="leave">
            Leaving
            <br />
            {/* <input type="date" id="guest" /> */}
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w-xs"
            />
          </label>
          <div className="btn_book">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <h1
        style={{ textAlign: "center", paddingTop: "90px" }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Offers of the Month
      </h1>
      <div className="booking_cards">
        {placeContent.map((data, index) => {
          return (
            <div
              className="cards_box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <Card key={index}>
                <Card.Img variant="top" src={data.place_image}></Card.Img>
                <div class="description">
                  <div class="text">{data.place_description}</div>
                </div>
                <Card.Body>
                  <Card.Title>{data.place_title}</Card.Title>
                  <Card.Text>{data.place_content}</Card.Text>
                  <Button variant="primary" className="book_button">
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <Rooms />
      </div>
    </div>
  );
}

export default Booking;
