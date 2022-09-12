import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
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
            {/* header Start => */}
            <header className="w-full border-b-2 border-solid border-b-gray-300 px-8 py-4">
                <div className="w-full flex items-center justify-between">
                    {/* header_logo Start => */}
                    <h1 className="md:w-1/3 xl:w-1/3 text-3xl font-semibold">
                        Gramy
                    </h1>
                    {/* header_logo End <= */}

                    {/* header_searchInput Start => */}
                    <form
                        onSubmit={submitHandler}
                        className="md:w-1/5 xl:w-1/5 flex items-center relative box-border">
                        <FontAwesomeIcon
                            className="absolute left-4"
                            icon={faMagnifyingGlass}
                        />
                        <input
                            type="text"
                            ref={searchRef}
                            placeholder="Search in Wolt . . ."
                            className="w-full leading-5 h-12 px-12 rounded-3xl bg-gray-200 font-medium text-lg "
                        />
                    </form>
                    {/* header_searchInput End <= */}

                    {/* header_login Start => */}
                    <div className="md:w-1/3 xl:w-1/3 flex items-center justify-end">
                        <a className="ml-8 font-sm font-semibold " href="£">
                            Log in
                        </a>
                        <a
                            className="ml-8 p-4 text-white bg-colorPrimaryDefault rounded-xl font-bold text-xl"
                            href="£">
                            Sign Up
                        </a>
                    </div>
                    {/* header_login End <= */}
                </div>
            </header>
            {/* header End <= */}
        </>
    );
}
export default Header;
