import React from "react";
import "./styles/booking.css";

function Booking() {
  return (
    <div className="book-container">
      <div className="booking-box">
        <h1>Book your Travel</h1>
        <form>
          <label htmlFor="name">
            Name
            <br />
            <input type="text" placeholder="Enter your name" id="name" />
          </label>
          <label htmlFor="number">
            Phone number
            <br />
            <input type="number" placeholder="Enter your number" id="number" />
          </label>
          <label htmlFor="place">
            Where to
            <br />
            <input type="text" placeholder="Enter place" id="place" />
          </label>
          <label htmlFor="book">
            Booking
            <br />
            <input type="date" id="book" />
          </label>
          <label htmlFor="email">
            Email
            <br />
            <input type="email" placeholder="Enter your email" id="email" />
          </label>

          <label htmlFor="address">
            Address
            <br />
            <input type="text" placeholder="Enter your address" id="address" />
          </label>

          <label htmlFor="guest">
            How Many
            <br />
            <input type="text" placeholder="Number of guests" id="guest" />
          </label>

          <label htmlFor="leave">
            Leaving
            <br />
            <input type="date" id="guest" />
          </label>
          <div id="btn-book">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
