import React, { useState, useEffect } from "react";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
import styles from "./main-banner.css";

const MainBanner = ({ headline }) => {
  const [bgSketch] = useP5(sketch);

  useEffect(() => {
    // update canvas size when resized
    const updateSize = () => {
      let width = document.getElementById("wrap").clientWidth;
      let height = document.getElementById("wrap").clientHeight;
      console.log("updated size to" + width);
    };
    updateSize();
    window.onload = updateSize;
    window.onresize = updateSize;
  });
  // Canvas will be rendered as child of div
  return (
    <div className="wrapper" id="wrap" ref={bgSketch}>
      <div className="bg">
        <h1>{headline}</h1>
      </div>
    </div>
  );
};

export default MainBanner;
