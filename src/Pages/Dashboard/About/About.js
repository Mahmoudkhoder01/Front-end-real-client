import React, { useState } from 'react';
import classes from "./About.module.css";
import topCircle from "../../../Assets/Images/topcircle.svg";
import dots from "../../../Assets/Images/dots.svg";

import centerCircle from "../../../Assets/Images/centerCircle1.svg";
import centerLinear from "../../../Assets/Images/centerCirclelinear.svg";
import bottomCircle from "../../../Assets/Images/bottomCircle.svg";
import yellowRectangle from "../../../Assets/Images/yellowrectangle.svg"



function Dashboard() {
  const [image, setImage] = useState('img/default.jpg');
  const [description, setDescription] = useState('Default description');

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the image and description to the server to update the dashboard
  }

  return (
    <div className={classes.Aboutcontainer}>

      {/* <img src={dots} alt="shapes" className={classes.topDots} /> */}


      <form onSubmit={handleSubmit}>
        <div className={classes.vectorContainer}>

          <img src={centerCircle} alt="shapes" className={classes.centerCircle} />

          



          <h2>About The CEO</h2>
          <img src={yellowRectangle} alt='shapes' className={classes.yellowRectangle} />

          <div className={classes.formGroup}>
            <label htmlFor="image">Upload Image:</label>
            <input type="file" className={classes.formControlFile} id="image" onChange={handleImageChange} />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="description">Description:</label>
            <textarea className={classes.formControl} id="description" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
          </div>

          <button type="submit" className={classes.btnPrimary}>Save Changes</button>
        </div>
        <img src={topCircle} alt='shapes' className={classes.topCircle} />
        <img src={bottomCircle} alt="shapes" className={classes.bottomCircle} />
      </form>

    </div>
  );
}


export default Dashboard;
