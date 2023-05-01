import EmailDeleteCard from "../EmailDelete/EmailDelete";
import classes from "./EmailCards.module.css";

const EmailCards = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.details}>
        <h2>From: {props.fullName}</h2>
        <h5>Email: {props.email}</h5>
        <p>Meassage: {props.message}</p>
      </div>
      <div className={classes.trash}>
        <EmailDeleteCard Id={props.Id} regetData={props.regetData} />
      </div>
    </div>
  );
};

export default EmailCards;
