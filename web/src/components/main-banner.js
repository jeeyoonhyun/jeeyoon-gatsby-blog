import React from "react";
// import Sketch from "react-p5";
import styles from "./main-banner.css";

function MainBanner({ headline }) {
  return (
    <div className="sketch-container">
      <div className="bg">
        <h1>{headline}</h1>
        {/* <canvas></canvas>
        <script src="./man-banner-sketch.js"></script> */}
        {/* TODO: add main-banner-sketch.js */}
        {/* todo: add category */}
      </div>
    </div>
  );
}

export default MainBanner;
