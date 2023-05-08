import React from "react";
import styles from "./TeamCard.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Team({ name, description, image }) {
  return (
    <Card
      sx={{
        width: 350,
        height: 420,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <div className={styles.imageCard}>
        <img
          className={styles.teamImage}
          src={`${process.env.REACT_APP_URL}${image}`}
          alt="team card"
        />
      </div>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: "600", marginBottom: "10px" }}
        >
          {name}
        </Typography>
        <Typography
          color="text.secondary"
          style={{ fontWeight: "500", fontSize: "1.1rem" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
