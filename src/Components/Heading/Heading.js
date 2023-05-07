import styles from "./heading.module.css"
export default function Heading({text}) {
  return (
    <h2 className={styles.heading}>{text}</h2>
  )
}
