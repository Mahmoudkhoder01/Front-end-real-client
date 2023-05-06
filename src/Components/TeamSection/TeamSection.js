import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from './TeamCard';
import styles from './TeamSection.module.css';
import topcircle from '../../Assets/Images/topcircle.svg';
import bottomLeftCircle from '../../Assets/Images/bottomLeftCircle.svg';
import bottomLeftRect from '../../Assets/Images/bottomLeftRect.svg';
import dots from '../../Assets/Images/dots.svg';
import bottomCircle from '../../Assets/Images/bottomCircle.svg';

export default function TeamSection() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/team')
      .then((response) => {
        setTeamData(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.TeamSection}>
      <div className={styles.TopSection}>
        <h6 className={styles.HeadingTitle}>OUR TEAM</h6>
        <img src={bottomCircle} alt="design" className={styles.TopGoldCircle} />
      </div>
      <div className={styles.cardsWrapper}>
        {teamData.map((member) => (
          <TeamCard key={member._id} name={member.name} description={member.description} image={member.image} />
        ))}
      </div>
      <div className={styles.bottomSection}>
        <img src={topcircle} alt="design" className={styles.topcircleBottom} />
        <img src={bottomLeftCircle} alt="design" className={styles.bottomLeftCircle} />
        <img src={bottomLeftRect} alt="design" className={styles.bottomLeftRect} />
        <img src={dots} alt="design" className={styles.dots} />
      </div>
    </section>
  );
}

