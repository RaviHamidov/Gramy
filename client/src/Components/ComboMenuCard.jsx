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

export default function ComboMenuCard({ title, data }) {
  const carouselRef = useRef(null);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <>
      <div className="w-full mx-auto pl-8">
        <div className="flex justify-between mb-2">
          <h1 className="ml-2 text-3xl font-semibold text-[rgb(32, 33, 37)]">
            {title}
          </h1>
          <div className="flex items-center px-8">
            <button className="font-semibold text-base text-sky-400 mr-2">
              See all
            </button>
            <button
              className="text-2xl text-sky-400 bg-sky-100 w-[45px] h-[45px] rounded-[50%] ml-1"
              onClick={() => carouselRef.current.slickPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="text-2xl text-sky-400 bg-sky-100 w-[45px] h-[45px] rounded-[50%] ml-1"
              onClick={() => carouselRef.current.slickNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <Slider {...settings} ref={carouselRef}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Link to="/res"  className="rounded-2xl hover:rounded-2xl text-white text-2xl align-center overflow-hidden mb-16 p-2 relative"
                  >
                    <img
                      className="rounded-xl hover:rounded-2xl scale-100 hover:scale-105 transition-all duration-300 mx-auto"
                      src={item.url}
                      alt="hero_img"
                    />
                    <div className="absolute z-20 bottom-8 left-8">
                      <h2 className="text-white text-3xl">Grocery Shopping</h2>
                      <p className="text-white text-lg">Grocery Shopping</p>
                    </div>
                  </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
