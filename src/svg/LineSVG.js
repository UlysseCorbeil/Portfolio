import React from "react";

const LineSVG = ({
    fill = "transparent",
    width = "50%",
    height = "1px",
    className = "svgLine",
    viewBox = "0 0 900 900"
}) => (
        <svg width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            preserveAspectRatio="xMidYMin slice"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M17.8625 317.193C26.9356 386.109 50.5633 447.939 83.6498 509.475C179.271 687.316 307.187 851.653 451.055 994.533C525.596 1068.56 605.317 1138.26 692.566 1197.78C758.912 1243.03 829.51 1285.56 904.977 1314.87C958.304 1335.58 1014.99 1349.8 1072.67 1351.1C1129.87 1352.39 1192.13 1346.95 1245.85 1326.28C1325.15 1295.77 1390.23 1227.45 1423.98 1151.62C1453.25 1085.86 1470.12 1011.83 1483.07 941.686C1495.18 876.097 1502.73 807.99 1501.61 741.328C1499.23 600.729 1466.77 463.13 1433.37 327.342C1406.66 218.758 1387.03 105.334 1319.65 13.2596" stroke="black" fill={fill} strokeLinecap="round" strokeLinejoin="round" />
        </svg >
    )

export default LineSVG;
