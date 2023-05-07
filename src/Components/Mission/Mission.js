import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeReviewCard from "./MissionCard";
import "./mission.css";

function Mission() {
  const [missionData, setMissionData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setMissionData(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mission-page">
      <div className="mission-page-cards">
        <RecipeReviewCard title="OUR MISSION" />
        <RecipeReviewCard title="OUR VISION" />
        <RecipeReviewCard title="OUR VALUES" />
      </div>
    </div>
  );
}

export default Mission;
