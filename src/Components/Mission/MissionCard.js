import * as React from "react";
import classes from "./MissionCard.module.css";

export default function RecipeReviewCard({ title, imageSource, paragraph }) {
  return (
    <div className={classes.details}>
      <div className={classes.heading}>
        <h2>{title}</h2>
      </div>
      <div className={classes.image}>
        <img src={imageSource} alt="soura" />
      </div>
      <div className={classes.desc}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
