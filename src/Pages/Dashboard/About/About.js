import React, { useState } from 'react';
import classes from "./About.module.css";
import Vector1 from "./Vector1.png";
import Vector from "./Vector.png";
import Vector2 from "./Vector2.png";
import Vector3 from "./Vector3.png";


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
    <div className={classes.container}>
     <div className={classes.vectorContainer}>
        <img src={Vector} alt='bla'></img>
        <input type="file" className={classes.formControlFile} id="image" onChange={handleImageChange} />
      </div>
      
      <form onSubmit={handleSubmit}>
      <div className={classes.Section2}>
      <h2>About The CEO </h2>
      <img src={Vector1} alt='bla'></img>
      </div>
        <div className={classes.formGroup}>
          <label htmlFor="description"></label>
          <textarea className={classes.formControl} id="description" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <button type="submit" className={classes.btnPrimary}>Save Changes</button>
      </form>
      
    </div>
  );
}

export default Dashboard;
