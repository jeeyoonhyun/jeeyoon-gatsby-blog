import React, { useState, useEffect } from "react";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
import styles from "./main-banner.css";

const MainBanner = ({ headline }) => {
  const [bgSketch] = useP5(sketch);

  // https://github.com/gatsbyjs/gatsby/issues/5835
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.setChartDimensions)
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setChartDimensions)
    }
  }

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
