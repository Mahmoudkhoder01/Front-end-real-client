import classes from "./email.module.css";
import EmailCards from "../../../Components/Email Components/EmailsCards/EmailCards";
import useFetch from "../../../Components/useFetch/useFetch";

const Email = () => {
  const { data, isLoading, error, reFetcth } = useFetch("api/contactus");
console.log(data, "email");
  return (
    <div className={classes.cardWrapper}>
      {data.map((email) => (
        <EmailCards
          Id={email._id}
          fullName={email.fullName}
          email={email.email}
          message={email.message}
          regetData={reFetcth}
        />
      ))}
    </div>
  );
};

export default Email;
