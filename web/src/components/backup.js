import React, { useState, useEffect } from "react";
import { useP5 } from "@gen/react-use-p5";
import { sketch } from "./main-banner-sketch.js";
import styles from "./main-banner.css";
import { render } from "react-dom";

class MainBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0, // or your default width here
    }

    
  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const [bgSketch] = useP5(sketch);


    return (
      <div className="wrapper" id="wrap" ref={bgSketch}>
      <div className="bg">
        <h1>{headline}</h1>
      </div>
    </div>
    )
  };
};

export default MainBanner;