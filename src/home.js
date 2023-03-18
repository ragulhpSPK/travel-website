import React from "react";
// import img1 from "./assets/homeimg3.jpg";
import "./styles/home.css";
import { Image } from "react-bootstrap";
import HomeSecondpage from "./homeSecondpage";
import { homeContent } from "./helper/homecontent";

function Home() {
  return (
    <div className="home-page">
      <div className="first-page">
        <div className="img-box">
          <Image src="./assets/homeimg3.jpg" alt="Not found" fluid />
        </div>
        {homeContent.map((data, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              class="scroll-left"
              key={index}
            >
              <p>{data.home_heading}</p>
              <div className="para">
                <p>{data.home_description}</p>
              </div>
              <div className="buttons">
                <button>Read more</button>
                <button>Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <HomeSecondpage />
    </div>
  );
}

export default Home;
