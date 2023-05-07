import React from 'react'
import styles from "./project.module.css"
export default function ProjectCard(props) {
  console.log(props)
  return (
    <div className={styles.card}>
         <img src={props.image} alt="project" />
            <div className={styles.info}>
                 <h3>{props.title}</h3>
                  <p>{props.description}</p>
            </div>
    </div>
  )
}
