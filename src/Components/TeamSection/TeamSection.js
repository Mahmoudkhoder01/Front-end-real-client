import React from 'react'
import TeamCard from './TeamCard'
import styles from './TeamSection.module.css'
import topcircle from '../../Assets/Images/topcircle.svg'
import bottomLeftCircle from '../../Assets/Images/bottomLeftCircle.svg'
import bottomLeftRect from '../../Assets/Images/bottomLeftRect.svg'
import dots from '../../Assets/Images/dots.svg'
import bottomCircle from '../../Assets/Images/bottomCircle.svg'

export default function TeamSection() {
  return (
    <section className={styles.TeamSection}>
        <div className={styles.TopSection}>
            
            <h2 className={styles.HeadingTitle}>OUR TEAM</h2>
            <img src={bottomCircle} className={styles.TopGoldCircle}/>     
        </div>
        <div className={styles.cardsWrapper}>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />     
        </div>
        <div className={styles.bottomSection}>
            <img src={topcircle} alt="design" className={styles.topcircleBottom}/> 
            <img src={bottomLeftCircle} alt="design" className={styles.bottomLeftCircle}/>
            <img src={bottomLeftRect} alt="design" className={styles.bottomLeftRect}/>
            <img src={dots} alt='design' className={styles.dots}/>
        </div>
    </section>
  )
}
