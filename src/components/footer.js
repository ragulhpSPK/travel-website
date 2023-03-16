import React from "react";

import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="content-section">
        <div className="popular-places">
          <h1>Popular places</h1>
          <span>
            <i class="bi bi-caret-right-fill"></i>
            Ladakh
          </span>
          <br />
          <span>
            <i class="bi bi-caret-right-fill"></i>Goa
          </span>
          <br />
          <span>
            <i class="bi bi-caret-right-fill"></i>Andaman
          </span>
          <br />
          <span>
            <i class="bi bi-caret-right-fill"></i>Manali
          </span>
          <br />
          <span>
            <i class="bi bi-caret-right-fill"></i>Agra
          </span>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <span>
            <i class="bi bi-caret-right-fill" />
            Ph No:923-4987-625
          </span>
          <br />
          <span>
            <i class="bi bi-caret-right-fill" />
            Email:xyz@gmail.com
          </span>
        </div>
        <div className="address">
          <h1>Address</h1>
          <p>Karur</p>
          <p>Vaiyapuri nagar,Tamilnadu</p>
          <p></p>
        </div>
        <div className="icons">
          <span>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-envelope"></i>
          </span>
          <div>
            <h1>Recent Views</h1>
          </div>
          <div className="recent-places">
            <div className="img-box1">
              <img src="./assets/manali.jpg" alt="not found" />
            </div>
            <div className="img-box1">
              <img src="./assets/goa.jpg" alt="not found" />
            </div>

            <div className="img-box1">
              <img src="./assets/ooty.jpg" alt="not found" />
            </div>

            <div className="img-box1">
              <img src="./assets/agra.jpg" alt="not found" />
            </div>

            <div className="img-box1">
              <img src="./assets/ladakh.jpg" alt="not found" />
            </div>

            <div className="img-box1">
              <img src="./assets/kodaikanal.jpg" alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
