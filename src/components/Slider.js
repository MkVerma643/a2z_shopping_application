import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="1.png"
            height="400px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "blueviolet" }}>a2z Pantry</h3>
            <p style={{ color: "blueviolet" }}>
              Get Upto 30% off on Pantry Products &nbsp;
              <Link to="/#">Get Here..</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="2.png"
            height="400px"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "blueviolet" }}>a2z Healthcare</h3>
            <p style={{ color: "blueviolet" }}>
              Get all the Safety Supplies to fight with Covid-19&nbsp;
              <Link to="/#">Get Here..</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="3.png"
            height="400px"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "blueviolet" }}>a2z HouseHold Essentials</h3>
            <p style={{ color: "blueviolet" }}>
              But all the HouseHold Essentials products and get upto 30%
              discount&nbsp;<Link to="/#">Get Here..</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
