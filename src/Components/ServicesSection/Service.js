import Heading from "../Heading/Heading";
import useFetch from "../useFetch/useFetch";
import classes from "./Service.module.css";
import Loading from "../LoadingAnimation/Loading";

export default function Service() {
  const { data, isLoading } = useFetch("service");

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Heading text={"OUR SERVICES"} />
          <div className={classes.serviceWrapper}>
            {data.map((data) => (
              <div className={classes.serviceCard}>
                <div className={classes.imageDiv}>
                  <img
                    className={classes.serviceImage}
                    src={`${process.env.REACT_APP_URL}${data.image}`}
                    alt="serviceImage"
                  />
                </div>
                <h3>{data.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
