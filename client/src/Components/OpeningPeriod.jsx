import React from "react";

import openingPeriod from "../Assets/Png/openingPeriod750x500.png";

const openingCard = () => {
    return (
        <>
            <div className="container flex justify-between mx-auto my-6">
                <div className="w-7/12 self-center">
                    <h1 className="text-5xl leading-[3.5rem] font-bold mb-5">
                        Good morning!
                    </h1>
                    <p className="text-base leading-6 mr-16 text-gray-500">
                        We’ll be open for deliveries soon! In the meantime, you
                        can still place an order and pick it up yourself or
                        schedule an order and get it delivered to you later.
                    </p>
                </div>
                <div className="w-3/12 flex justify-end mr-16">
                    <img
                        className="w-[452px] h-[244px]"
                        src={openingPeriod}
                        alt="GoodMorning"
                    />
                </div>
            </div>
        </>
    );
};

export default openingCard;
