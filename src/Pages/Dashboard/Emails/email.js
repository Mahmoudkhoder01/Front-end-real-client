import classes from "./email.module.css";
import EmailCards from "../../../Components/Email Components/EmailsCards/EmailCards";
import useFetch from "../../../Components/useFetch/useFetch";
import Loading from "../../../Components/LoadingAnimation/Loading";

const Email = () => {
  const { data, isLoading, reFetcth } = useFetch("api/contactus");
  console.log(data, "email");
  return (
    <div className={classes.cardWrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        data.map((email) => (
          <EmailCards
            key={email._id}
            Id={email._id}
            fullName={email.fullName}
            email={email.email}
            message={email.message}
            regetData={reFetcth}
          />
        ))
      )}
    </div>
  );
};

export default Email;
