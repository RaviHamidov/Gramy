<<<<<<< HEAD
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
import { useRef } from "react";
import searchLogo from "../assets/images/iconSearch.png";
import "../app.css";
>>>>>>> 2bd671c1c7de3feee44bd41198ec20b64ea0bf9c

function Nav() {
    const searchRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredInput = searchRef.current.value;
        if (enteredInput !== "") {
            console.log(enteredInput);
        }
    };

    return (
        <>
            <nav className="container-fluid flex justify-between items-center px-16">
                <FontAwesomeIcon icon={["fa-solid fa-magnifying-glass"]} />

                <form
                    onSubmit={submitHandler}
                    className="w-32 flex justify-between mt-8">
                    <input
                        type="text"
                        ref={searchRef}
                        placeholder="Search in Wolt . . ."
                        className="h-10 px-4 focus:ring focus:ring-gray-400 focus:rounded-xl"
                    />
                </form>

                <div className="p-8">
                    <a
                        className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150"
                        href="£">
                        Daxil ol
                    </a>
                    <a
                        className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150"
                        href="£">
                        Qeydiyyatdan keçin
                    </a>
                    <a
                        className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150"
                        href="£">
                        Dil
                    </a>
                </div>
            </nav>
        </>
    );
}
export default Nav;
