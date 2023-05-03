import classes from "./Loading.module.css";

export default function Loading() {
  return (
    <div>
      <div className={classes.load}>
        <div className={classes.one}></div>
        <div className={classes.two}></div>
        <div className={classes.three}></div>
      </div>
    </div>
  );
}
