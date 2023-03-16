import React from "react";
import img1 from "./assets/homeimg3.jpg";
import "./styles/home.css";
import { Image } from "react-bootstrap";
import HomeSecondpage from "./homeSecondpage";

function Home() {
  return (
    <div className="home-page">
      <div className="first-page">
        <div className="img-box">
          <Image src={img1} alt="Not found" fluid />
        </div>

        <div data-aos="fade-up" data-aos-duration="3000" class="scroll-left">
          <p>Collect Moments Not Things</p>
          <div className="para">
            <p>
              Travel makes one modest. You see what a tiny place you occupy in
              the world.
            </p>
          </div>
          <div className="buttons">
            <button>Read more</button>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <HomeSecondpage />
    </div>
  );
}

export default Home;
