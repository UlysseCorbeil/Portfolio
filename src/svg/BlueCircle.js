import React from "react";

const BlueCircle = ({
    fill = "transparent",
    width = "30%",
    height = "1px",
    className = "",
    viewBox = "0 0 8 8"
}) => (
        <svg width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon blueCircle ${className || ""}`}
            preserveAspectRatio="xMidYMin slice"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="0" cy="4" r="4" fill="#0C29FF" />
        </svg>
    );

export default BlueCircle;