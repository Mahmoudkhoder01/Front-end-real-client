import React, { useState } from "react";
import classes from "./Users.module.css";

function Dashboard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the image and description to the server to update the dashboard
  };

  return (
    <div className={classes.container}>
      <div className={classes.vectorContainer}>
        <input type="file" className={classes.formControlFile} id="image" />
      </div>

      <form onSubmit={handleSubmit}>
        <h2>About The CEO </h2>

        <div className={classes.formGroup}>
          <label htmlFor="description"></label>
          <textarea
            className={classes.formControl}
            id="description"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className={classes.btnPrimary}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
