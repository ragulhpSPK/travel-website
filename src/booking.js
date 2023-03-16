import React from "react";
import "./styles/booking.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
      <div className="booking-cards">
        <div className="card-box">
          <Card>
            <Card.Img variant="top" src="./assets/goa.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-box">
          <Card>
            <Card.Img variant="top" src="./assets/ladakh.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-box">
          <Card>
            <Card.Img src="./assets/ooty.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        {/* <div className="card-box">
          <Card>
            <Card.Img variant="top" src="./assets/manali.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
        {/* <div className="card-box">
          <Card>
            <Card.Img variant="top" src="./assets/kodaikanal.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-box">
          <Card>
            <Card.Img variant="top" src="./assets/agra.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default Booking;
