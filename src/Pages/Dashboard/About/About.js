import { useState } from "react";
import classes from "./About.module.css";
import axios from "axios";
import bottomLeftCircle from "../../../Assets/Images/bottomLeftCircle.svg";
import dots from "../../../Assets/Images/yellowDots.svg";
import centerCircle from "../../../Assets/Images/centerCircle1.svg";
import bottomRightCircle from "../../../Assets/Images/centerCirclelinear.svg";
import { toast } from "react-toastify";
import useFetch from "../../../Components/useFetch/useFetch";
import Loading from "../../../Components/LoadingAnimation/Loading";

export default function About(props) {
  const { data, isLoading, reFetch } = useFetch(
    "about/64560e09337fb5a4e926680d"
  );
  const [updatedData, setUpdatedData] = useState({
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", updatedData.description);
    formData.append("image", selectedFile);

    axios
      .patch(
        `${process.env.REACT_APP_URL}about/edit/64560e09337fb5a4e926680d`,
        formData
      )
      .then(async (response) => {
        console.log(response);
        setUpdatedData({
          description: "",
        });
        await reFetch();
        toast.success("About edited successfully");
      })
      .catch((error) => {
        console.log("Error editing about", error);
        toast.error(error.response.data.err);
      });
  };

  return (
    <div className={classes.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img
            src={bottomLeftCircle}
            width="200px"
            className={classes.bottomLeftCircle}
            alt=""
          />
          <img src={dots} width="40px" className={classes.dots} alt="" />
          <img src={centerCircle} className={classes.centerCircle} alt="" />
          <img
            src={dots}
            width="40px"
            className={classes.topRightDots}
            alt=""
          />
          <img
            src={bottomRightCircle}
            width="200px"
            className={classes.bottomRightCircle}
            alt=""
          />
          <div className={classes.uploadImage}>
            <div>
              <input
                type="file"
                name="image"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes.heading}>
              <h2>ABOUT THE CEO</h2>
            </div>
            <div className={classes.description}>
              <label>
                Description
                <textarea
                  onChange={handleTextChange}
                  id="description"
                  name="description"
                  value={updatedData.description}
                />
              </label>
            </div>
            <button className={classes.editbtn} onClick={handleEdit}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
