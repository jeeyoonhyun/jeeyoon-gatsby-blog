import React from "react";

import styles from "./main-banner.css";

function MainBanner({ headline }) {
  return (
    <div className="container">
      <div className="bg">
        <h1>{headline}</h1>
        {/* put canvas here */}
      </div>
    </div>
  );
}

export default MainBanner;
