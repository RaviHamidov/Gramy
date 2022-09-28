import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import LeftArrow from "../Assets/Svg/left-arrow.svg";
import RightArrow from "../Assets/Svg/right-arrow.svg";
import { Link } from "react-router-dom";

export default function Advertisement({ title, data }) {
  const carouselRef = useRef(null);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <>
      <div className="w-full mx-auto">
        <div className="flex justify-between">
          <div className="w-full flex items-center justify-between px-8 relative">
            <button
              className="text-2xl text-sky-400 bg-sky-100 w-[45px] h-[45px] rounded-[50%] ml-1 absolute left-[2vw] top-[22vh] z-10"
              onClick={() => carouselRef.current.slickPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="text-2xl text-sky-400 bg-sky-100 w-[45px] h-[45px] rounded-[50%] ml-1 absolute right-[2vw] top-[22vh] z-10"
              onClick={() => carouselRef.current.slickNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <Slider {...settings} ref={carouselRef}>
          {data.map((item, index) => {
            return (
            <Link to="/res" className="w-[100vw] h-[50vh] rounded-2xl hover:rounded-2xl text-white text-2xl align-center overflow-hidden mb-16 px-3 relative"
            key={index}>
           
                <img
                  className="w-[100vw] h-[50vh] rounded-xl hover:rounded-2xl scale-100 hover:scale-105 transition-all duration-300 mx-auto"
                  src={item.url}
                  alt="hero_img"
                />
                <div className="absolute z-20 bottom-8 left-8">
                  <span className="text-gray-100 opacity-70 text-lg font-semibold leading-5 tracking-wider">
                    Gift Card
                  </span>
                  <h2 className="text-white text-4xl">Grocery Shopping</h2>
                  <p className="text-white text-xl">Grocery Shopping</p>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
