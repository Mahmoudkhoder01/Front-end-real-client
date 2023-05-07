import styles from "./about.module.css";
import Heading from "../Heading/Heading";
import ceoImage from "../../Assets/Images/ceo.svg";
import yellowCircle from "../../Assets/Images/yellowFll.svg";
import purpleCircle from "../../Assets/Images/purpleFull.svg";
import dots from "../../Assets/Images/dots.svg";

export default function Aboutceo() {
  return (
    <>
      <div className={styles.about}>
        <img src={ceoImage} alt="CEO" />
        <div className={styles.text}>
          <Heading text="about the ceo" />
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
            esse alias quibusdam nisi maiores vero necessitatibus reiciendis
            possimus quidem, exercitationem quisquam maxime labore iure?
            Distinctio ratione esse ullam! Ullam.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolor illum esse alias quibusdam nisi
            maiores vero necessitatibus reiciendis possimus quidem,
            exercitationem quisquam maxime labore iure? Distinctio ratione esse
            ullam! Ullam.
          </p>
        </div>
      </div>
      <div className={styles.illustration}>
        <img
          src={yellowCircle}
          alt="illustration"
          className={styles.yellowRight}
        />
        <img src={dots} alt="illustration" className={styles.dotsRight} />
        <img src={dots} alt="illustration" className={styles.dotsLeft} />
        <img
          src={yellowCircle}
          alt="illustration"
          className={styles.yellowLeft}
        />
        <img
          src={purpleCircle}
          alt="illustration"
          className={styles.purpleCircle}
        />
      </div>
    </>
  );
}
