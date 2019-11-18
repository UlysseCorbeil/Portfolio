import React from "react";
import BlueCircle from "./BlueCircle";
import RedCircle from "./RedCircle";

class LoadingSVG extends React.Component {
    render() {
        return (
            <div className="loading-container">
                <BlueCircle />
                <RedCircle />
            </div>
        );
    }
}
export default LoadingSVG;
