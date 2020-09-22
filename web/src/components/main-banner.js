import React, { useState, useEffect } from "react";
import { Canvas } from "p5-react-renderer";
import "p5";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
import styles from "./main-banner.css";
let width;
let height;
const MainBanner = ({ headline }) => {
  const [bgSketch] = useP5(sketch);

  useEffect(() => {
    // update canvas size when resized
    const updateSize = () => {
      width = document.getElementById("wrap").clientWidth;
      height = document.getElementById("wrap").clientHeight;
      console.log("updated size to" + width);
      document.getElementById("defaultCanvas0").width = width;
      document.getElementById("defaultCanvas0").height = height;
      document.getElementById("defaultCanvas0").style = " ";
    };
    updateSize();
    window.onload = updateSize;
    window.onresize = updateSize;
  });
  // Canvas will be rendered as child of div
  return (
    // <div className="wrapper" id="wrap">
    //   <div className="bg">
    //     <h1>{headline}</h1>
    //   </div>
    //   <Canvas
    //     size={[
    //       document.getElementById("wrap").clientWidth,
    //       document.getElementById("wrap").clientHeight,
    //     ]}
    //     background={0}
    //   ></Canvas>
    // </div>
    <div className="wrapper" id="wrap" ref={bgSketch}>
      <div className="bg">
        <h1>{headline}</h1>
      </div>
    </div>
  );
};

export default MainBanner;
