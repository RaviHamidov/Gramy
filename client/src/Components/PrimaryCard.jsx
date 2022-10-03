import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faFaceSmile,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import LeftArrow from "../Assets/Svg/left-arrow.svg";
import RightArrow from "../Assets/Svg/right-arrow.svg";

export default function PrimaryCard({ title, data }) {
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 6.1,
    slidesToScroll: 2,
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
              <Link to="/res" key={index}>
                <div
                  className="!w-fit rounded-2xl text-white text-2xl align-center transition-all duration-300 shadow-primary focus:border-none hover:scale-105 m-2 mb-16 mr-2 "
                  key={index}
                >
                  <img
                    className="w-full h-full max-w-[360px] max-h-[200px] rounded-t-xl "
                    src={item.url}
                    alt="hero_img"
                  />

                  <div className="w-full flex p-4 text-[#000] border-b-2 border-dashed border-b-gray-300">
                    <div>
                      <h3 className="text-xl font-semibold text-[rgb(32, 33, 37)]">
                        McDonald's Fountain Square
                      </h3>
                      <h4 className="text-base font-medium text-gray-500">
                        I'm lovin' it!
                      </h4>
                    </div>
                    <div className="w-1/5 flex items-center justify-center flex-col rounded-xl text-base font-medium text-sky-400 bg-sky-400/10">
                      <div>15-25</div>
                      <div>min</div>
                    </div>
                  </div>

                  <div className="text-gray-500 px-4 py-1 text-sm font-normal">
                    <FontAwesomeIcon icon={faBicycle} />
                    <span className="ml-1">AZN</span>
                    <span className="ml-1">2.00</span>
                    <span> / </span>
                    <FontAwesomeIcon icon={faFaceSmile} />
                    <span className="ml-1">9.2</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
