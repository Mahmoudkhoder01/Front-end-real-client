import React from "react";
import styles from './TeamCard.module.css';
import teamImage from '../../Assets/Images/download.jpeg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TeamCard() {
  return (
    <Card sx={{ maxWidth: 300,width:250, height: '320px',display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 2 }}>
      <img
        className={styles.teamImage}
        src={teamImage}
        alt="team card"
        style={{ height: '70%',objectFit: 'cover' }}
      />
      <CardContent sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography  variant="h5" style={{fontWeight:'600',marginBottom:'10px'}}>
          Lizard
        </Typography>
        <Typography  color="text.secondary"  style={{fontWeight:'500', fontSize:'1rem'}}>
          hi jaljflka;jlak;jaljflka       
        </Typography>
      </CardContent>
    </Card>
  );
}
