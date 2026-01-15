import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bath1 from "../assets/bat9.jpeg";
import bath2 from "../assets/bat12.jpeg";
import bath3 from "../assets/bat3.jpeg";
import bath4 from "../assets/bath4.jpg";
import bath5 from "../assets/bat15.jpeg";
import React from "react";

const SpinningCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const images = [bath1, bath2, bath3, bath4, bath5];

  return (
    <div className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] mx-auto px-1">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-1">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={img}
                alt={`Bathroom ${index + 1}`}
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpinningCarousel;