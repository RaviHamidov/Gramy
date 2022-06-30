import React from "react";
function Section(props) {
    return (
        <>
            <h1 className="font-bold text-2xl">{props.header}</h1>
            <div className="w-1/5 bg-zinc p-2 shadow-2xl shadow-gray-700">
                <img
                    className="rounded-2xl"
                    src="https://imageproxy.wolt.com/venue/5f8ea071b4a6322253153e09/8d787366-16ca-11ed-996b-be7d833b226f_hicaz_doner_super_disc?w=600"
                    alt="doner"
                />
                <div className="flex">
                    <div>
                        <h2 className="font-sans font-semibold text-xl">
                            {props.name}
                        </h2>
                        <span className="block text-gray-400 font-sans">
                            {props.description}
                        </span>
                        <span className="block font-mono">
                            {props.price} AZN
                        </span>
                    </div>
                    <div className="bg-gray-600 rounded-2xl m-2 flex p-2 justify-center text-white items-center">
                        <p className="font-sans">20-25 dəq</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section;
