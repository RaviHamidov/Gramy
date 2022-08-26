import React from "react";

function Ads(props) {
    return (
        <>
            <div className={props.parent}>
                <div
                    className={props.child}
                    style={{
                        backgroundImage: `url(${props.image})`,
                    }}></div>{" "}
            </div>
        </>
    );
}
export default Ads;
