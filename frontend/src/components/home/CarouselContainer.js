import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselContainer.css";
import Img1 from "../../assets/carousel1.png";

function CarouselContainer() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-flex w-100 banner" src={Img1} alt="First slide" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-flex w-100 banner" src={Img1} alt="First slide" />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
