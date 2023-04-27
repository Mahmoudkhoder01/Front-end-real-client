import styles from "./login.module.css"
import logo from "../../../Assets/Images/topdesignlogo.svg"
import topCircle from "../../../Assets/Images/topcircle.svg"
import dots from "../../../Assets/Images/dots.svg"
import topRectangle from "../../../Assets/Images/toprectangle.svg"
import centerCircle from "../../../Assets/Images/centerCircle1.svg"
import centerLinear from "../../../Assets/Images/centerCirclelinear.svg"
import bottomCircle from "../../../Assets/Images/bottomCircle.svg"
import TextField from '@mui/material/TextField';
import Button from "../../../Components/Button/Button"

function login() {
  return (
    <div className={styles.loginPage}>
          <div className={styles.topSide}>
            <div className={styles.logoPosition}>
              <img src={logo} alt="logo" />
            </div>
            <img src={topRectangle} alt="shapes" className={styles.topRectangle}/>
            <img src={topCircle} alt="shapes" className={styles.topCircle}/>
            <img src={dots} alt="shapes" className={styles.topDots} />
          </div>
          <div className={styles.centerSide}>
            <img src={centerCircle} alt="shapes" className={styles.centerCircle} />
            <img src={dots} alt="shapes" className={styles.centerDots} />
            <img src={centerLinear} alt="shapes" className={styles.centerLinear} />
          </div>
          <div className={styles.bottomSide}>
            <img src={bottomCircle} alt="shapes" />
          </div>
          <div className={styles.loginPosition}>
            <form className={styles.loginForm}>
              <h1 className={styles.heading}>Sign In</h1>
              <div className={styles.inputs}>
                <TextField  label="email" variant="outlined" type="email" />
                <TextField  label="password" variant="outlined" type="password" />
              </div>
              <Button text="Login" />
            </form>
          </div>
      </div>
  )
}

export default login