import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../assets/1.jpg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpg";

const MyCarousel = () => {
  return (
    <div >
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators
        className=" m-0 bg-transparent"
      >
        <div>
          <img src={one} alt="image" />

          <p className="legend">You Dream house is here</p>
        </div>
        <div>
          <img src={two} alt="image" />

          <p className="legend">Villas and building</p>
        </div>
        <div>
          <img src={three} alt="image" />

          <p className="legend">We build from scratch</p>
        </div>
      </Carousel>
      
    </div>
  );
};

export default MyCarousel;
