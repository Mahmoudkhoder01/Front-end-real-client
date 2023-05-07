import React from 'react'
import styles from "./project.module.css"

export default function ProjectCard(props) {
  return (
    <div class="card">
         <img src={props.images} alt="project" />
            <div class="info">
                 <h3>{props.title}</h3>
                  <p>{props.description}</p>
            </div>
    </div>
  )
}
