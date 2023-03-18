import React from "react";
import "./styles/service.css";
import { serviceContent } from "./helper/servicecontent";

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
          {serviceContent.map((data, index) => {
            return (
              <div
                className="cardbx"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                key={index}
              >
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
                    <h1>{data.service_heading}</h1>
                    <p>{data.service_description}</p>
                    <a href="s">Read More</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
