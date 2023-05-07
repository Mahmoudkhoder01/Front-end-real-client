import * as React from "react";
import teamImage from "../../Assets/Images/dots.svg";
import "./MissionCard.css";

export default function RecipeReviewCard(props) {
  return (
    <div className="mission-page-card">
      <h2
        style={{
          textAlign: "center",
          // marginBottom: "20px",
          fontSize: "2rem",
          backgroundColor: "#db1866",
          color: "#fff",
        }}
      >
        {props.title}
      </h2>
      <div className="mission-page-card-content">
        <div className="mission-page-card-content-image">
          <img
            src={teamImage}
            alt="card image"
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="mission-page-card-content-desc">
          <p>
            This impressive paella is a perfect party dish <br></br>and a fun //
            meal to cook together with your guests.<br></br> Add 1 cup of frozen
            // peas along with the mussels,<br></br> if you like.
          </p>
        </div>
      </div>
    </div>
  );
}
