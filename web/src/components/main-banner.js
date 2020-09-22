import React, { useState, useEffect } from "react";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
import styles from "./main-banner.css";

const MainBanner = ({ headline }) => {
  const [bgSketch] = useP5(sketch);

  // https://github.com/gatsbyjs/gatsby/issues/5835
  const [hasRan, setHasRan] = useState(false);
  const [screenSize, setScreenSize] = useState({
    height: 0,
    width: 0,
  });
  const updateScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    if (!hasRan) {
      setHasRan(true);
      updateScreenSize();
    }
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [screenSize]);

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
