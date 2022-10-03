import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import LeftArrow from "../Assets/Svg/left-arrow.svg";
import RightArrow from "../Assets/Svg/right-arrow.svg";

export default function CategoriesCard({ title, data }) {
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
    speed: 2000,
    autoplaySpeed: 4000,
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
              <div
                className="!w-fit rounded-2xl text-white text-2xl align-center transition-all duration-300 shadow-primary focus:border-none hover:scale-105 m-2 mb-16 mr-2 "
                key={index}
              >
                <img
                  className="w-full h-full max-w-[300px] max-h-[300px] rounded-t-xl "
                  src={item.categoriesImageUrl}
                  alt="categoryImg"
                />

                <div className="w-full flex flex-col p-4 text-[#000]">
                  <h3 className="text-xl font-semibold text-[rgb(32, 33, 37)]">
                    {item.categoriesTitle}
                  </h3>
                  <span className="text-base font-medium text-gray-500">
                    {item.categoriesCountPlaces} places
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
