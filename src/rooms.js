import "./styles/rooms.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { roomsContent } from "./helper/roomscontent";

function Rooms() {
  

  return (
    <div className="rooms_container">
      <h1
        style={{ textAlign: "center", paddingTop: "40px" }}
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Rooms We Provided
      </h1>

      <div className="rooms_cards">
        {roomsContent.map((data, index) => {
          return (
            <div className="rooms_box" key={index}>
              <Card
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <Card.Img variant="top" src={data.room_img}></Card.Img>
                <div class="description">
                  <div class="text">{data.rooms_description}</div>
                </div>
                <Card.Body>
                  <Card.Title>{data.room_title}</Card.Title>
                  <Card.Text>{data.rooms_content}</Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rooms;
