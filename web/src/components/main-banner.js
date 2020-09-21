import React from "react";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
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

// const MainBanner = ({ headline }) => {
//   const [bgSketch] = useP5(sketch);
//   // Canvas will be rendered as child of div
//   return (
//     <div className="wrapper" ref={bgSketch}>
//       <div className="bg">
//         <h1>{headline}</h1>
//       </div>
//     </div>
//   );
// };

export default MainBanner;
