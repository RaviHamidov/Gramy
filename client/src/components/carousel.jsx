import React, { useRef } from "react";
import Slider from "react-slick";

import LeftArrow from "../assets/images/leftArrow.svg";
import RightArrow from "../assets/images/rightArrow.svg";

export default function Card({ title, data }) {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
    };
    return (
        <div className="card__container container-fluid mx-auto">
            <div className="card_container--header flex justify-between">
                <h1>{title}</h1>
                <div className="card_container--header--cta">
                    <button onClick={() => carouselRef.current.slickPrev()}>
                        Prev
                    </button>
                    <button onClick={() => carouselRef.current.slickNext()}>
                        Next
                    </button>
                </div>
            </div>

            <Slider
                {...settings}
                ref={carouselRef}
                className="card__container--inner">
                {data.map((item, index) => {
                    return (
                        <div
                            className="card__container--inner--card"
                            key={index}>
                            <img src={item.url} alt="hero_img" />

                            <div className="card__container--inner--card--date_time">
                                <img
                                    src="https://www.wanderon.in/svg/clock.svg"
                                    alt="time"
                                />
                                <p>4D-5D</p>

                                <img
                                    src="https://www.wanderon.in/svg/map-pin.svg"
                                    alt="location"
                                    style={{ marginLeft: 10 }}
                                />
                                <p>Delhi</p>
                            </div>

                            <h2>Meghalaya Backpacking</h2>
                            <p>
                                starts at <span>₹15,999/-</span>
                            </p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
