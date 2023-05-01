import React, { useState } from 'react';
import classes from "./About.module.css";



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
        
        <input type="file" className={classes.formControlFile} id="image" onChange={handleImageChange} />
      </div>
      
      <form onSubmit={handleSubmit}>
      
      <h2>About The CEO </h2>
      
      
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
