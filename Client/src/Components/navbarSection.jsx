import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMountainCity,
    faTowerBroadcast,
    faUtensils,
    faCartShopping,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <>
            {/* navbar Start => */}
            <nav className="container-fluid flex mx-auto px-8 py-6">
                {/* navbar_location Start => */}
                <div className="md:w-1/3 xl:w-1/3">
                    <button className="flex items-center justify-center">
                        <div className="p-2 bg-sky-100 border-sky-100 rounded-[50%] mr-2">
                            <FontAwesomeIcon
                                className="text-sky-500"
                                icon={faMountainCity}
                            />
                        </div>
                        <div className="text-sky-500 font-semibold text-lg">
                            Baku
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon
                                className="text-sky-400"
                                icon={faChevronDown}
                            />
                        </div>
                    </button>
                </div>
                {/* navbar_location End <= */}

                {/* navbar_content Start => */}
                <div className="flex justify-between md:w-1/3 xl:w-1/3">
                    {/* when Active: bg-sky-400 text-white
                             Default: */}
                    <div className="flex align-center justify-center bg-sky-400 text-white text-lg font-medium cursor-pointer hover:shadow-xl hover:transition-all hover:duration-300 mr-4 rounded-3xl px-4 py-2">
                        <FontAwesomeIcon
                            className="mr-2 text-xl"
                            icon={faTowerBroadcast}
                        />
                        <a href="#">Discovery</a>
                    </div>
                    <div className="flex align-center justify-center text-gray-500 text-lg font-medium cursor-pointer hover:shadow-xl hover:transition-all hover:duration-300 mr-4 rounded-3xl px-4 py-2">
                        <FontAwesomeIcon
                            className="mr-2 text-xl"
                            icon={faUtensils}
                        />
                        <a href="#">Restaurants</a>
                    </div>
                    <div className="flex align-center justify-center text-gray-500 text-lg font-medium cursor-pointer hover:shadow-xl hover:transition-all hover:duration-300 mr-4 rounded-3xl px-4 py-2">
                        <FontAwesomeIcon
                            className="mr-2 text-xl"
                            icon={faCartShopping}
                        />
                        <a href="#">Stores</a>
                    </div>
                </div>
                {/* navbar_content End <= */}
                {/* navbar_free Start => */}
                <div className="md:w-1/3 xl:w-1/3"></div>
                {/* navbar_free End <= */}
            </nav>
            {/* navbar End <= */}
        </>
    );
}

export default NavBar;
