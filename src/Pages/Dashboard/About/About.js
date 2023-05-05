import React from "react";
import classes from "./About.module.css";
import bottomLeftCircle from "../../../Assets/Images/bottomLeftCircle.svg";
import dots from "../../../Assets/Images/yellowDots.svg";
import centerCircle from "../../../Assets/Images/centerCircle1.svg";
import bottomRightCircle from "../../../Assets/Images/centerCirclelinear.svg";

export default function About() {

  return (
    <div className={classes.container}>
      <img
        src={bottomLeftCircle}
        width="200px"
        className={classes.bottomLeftCircle}
        alt=""
      />
      <img src={dots} width="40px" className={classes.dots} alt="" />
      <img src={centerCircle} className={classes.centerCircle} alt="" />
      <img src={dots} width="40px" className={classes.topRightDots} alt="" />
      <img
        src={bottomRightCircle}
        width="200px"
        className={classes.bottomRightCircle}
        alt=""
      />
      <div className={classes.uploadImage}>
        <div>
          <input type="file" />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.heading}>
          <h2>ABOUT THE CEO</h2>
        </div>
        <div className={classes.description}>
          <label>
            Description
            <textarea id="description" />
          </label>
        </div>
      </div>
    </div>
  );
}
