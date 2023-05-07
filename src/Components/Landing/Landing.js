import styles from "./Landing.module.css";

// import images
import topCircle from "../../Assets/Images/topcircle.svg";
import dots from "../../Assets/Images/dots.svg";
import topRectangle from "../../Assets/Images/toprectangle.svg";
import centerCircle from "../../Assets/Images/centerCircle1.svg";
import centerLinear from "../../Assets/Images/centerCirclelinear.svg";
import landing from "../../Assets/Images/landing.png";
import vector from "../../Assets/Images/Vector.svg";

export default function Landing() {
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.topSide}>
          <img
            src={topRectangle}
            alt="shapes"
            className={styles.topRectangle}
          />
          <img src={topCircle} alt="shapes" className={styles.topCircle} />
          <img src={dots} alt="shapes" className={styles.topDots} />
        </div>
        <div className={styles.centerSide}>
          <img
            src={centerCircle}
            alt="shapes"
            className={styles.centerCircle}
          />
          <img src={dots} alt="shapes" className={styles.centerDots} />
          <img
            src={centerLinear}
            alt="shapes"
            className={styles.centerLinear}
          />
          <div className={styles.heroSection}>
            <div>
              <h1>Design Driven With Passion</h1>
              <img className={styles.vector} src={vector} alt="" />
              <div className={styles.point}></div>
            </div>
            <div>
              <img
                className={styles.landing}
                src={landing}
                alt=""
                width={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
