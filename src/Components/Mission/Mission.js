import RecipeReviewCard from "./MissionCard";
import classes from "./mission.module.css";
import mission from "../../Assets/Images/mission.png";
import values from "../../Assets/Images/values.png";
import vision from "../../Assets/Images/vision.jpg";

function Mission() {
  return (
    <div className={classes.missionPageCards}>
      <RecipeReviewCard
        title="OUR MISSION"
        imageSource={mission}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipa adipasis imageum et just eirm sit ullamcorper ullamcorper magna aliqu "
        }
      />
      <RecipeReviewCard
        title="OUR VISION"
        imageSource={vision}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipa adipasis imageum et just eirm sit ullamcorper ullamcorper magna aliqu "
        }
      />
      <RecipeReviewCard
        title="OUR VALUES"
        imageSource={values}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipa adipasis imageum et just eirm sit ullamcorper ullamcorper magna aliqu "
        }
      />
    </div>
  );
}

export default Mission;
