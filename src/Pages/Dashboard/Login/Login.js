import styles from "./login.module.css";
import logo from "../../../Assets/Images/topdesignlogo.svg";
import topCircle from "../../../Assets/Images/topcircle.svg";
import dots from "../../../Assets/Images/dots.svg";
import topRectangle from "../../../Assets/Images/toprectangle.svg";
import centerCircle from "../../../Assets/Images/centerCircle1.svg";
import centerLinear from "../../../Assets/Images/centerCirclelinear.svg";
import bottomCircle from "../../../Assets/Images/bottomCircle.svg";
import TextField from "@mui/material/TextField";
import Button from "../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../userContext";
import { useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const { setToken, setIsLoggedIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to check password length
  function isValidPassword(password) {
    return password.length >= 6;
  }

  const handleLogin = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    if (!isValidPassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_URL}admin/login`, { email, password })
      .then((response) => {
        const authToken = response.data.token;
        setToken(authToken);
        setIsLoggedIn(true);
        setErrorMessage("");
        navigate("/admin/services")
        toast.success("Login successful!");
        Cookies.set("token", authToken, { expires: 1 }); //1day
        
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid email or password");
          toast.error(
            errorMessage ||
              error.response ||
              "An error occurred, please try again"
          );
        } else {
          setErrorMessage("An error occurred, please try again");
          toast.error(
            errorMessage ||
              error.response ||
              "An error occurred, please try again"
          );
        }
      });
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.topSide}>
        <div className={styles.logoPosition}>
          <img src={logo} alt="logo" />
        </div>
        <img src={topRectangle} alt="shapes" className={styles.topRectangle} />
        <img src={topCircle} alt="shapes" className={styles.topCircle} />
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
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <h1 className={styles.heading}>Sign In</h1>
          <div className={styles.inputs}>
            <TextField
              label="email"
              variant="outlined"
              type="email"
              onChange={handleEmailChange}
            />
            <TextField
              label="password"
              variant="outlined"
              type="password"
              onChange={handlePasswordChange}
            />
          </div>
          <Button text="Login" />
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Login;
