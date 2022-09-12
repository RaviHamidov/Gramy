import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function quickLink({ title, data }) {
    return (
        <>
            <h1 className="text-3xl font-semibold mx-10 mb-8">{title}</h1>
            <div className="flex">
                {data.map((item, index) => {
                    return (
                        <div
                            className="w-1/5 flex justify-between items-center p-4 border-solid border-2 border-gray-200 mx-10 mb-8 rounded-xl"
                            key={index}>
                            <a href="#" className="text-lg overflow-ellipsis">
                                {item.link}
                            </a>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="text-lg text-gray-400"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
