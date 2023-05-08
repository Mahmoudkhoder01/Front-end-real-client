import TeamCard from "./TeamCard";
import styles from "./TeamSection.module.css";
import useFetch from "../useFetch/useFetch";
import Heading from "../Heading/Heading";
import Loading from "../LoadingAnimation/Loading";

export default function TeamSection() {
  const { data, isLoading } = useFetch("team");

  return (
    <section className={styles.TeamSection}>
      <div className={styles.TopSection}>
        <Heading text={"OUR TEAM"} />
      </div>
      <div className={styles.cardsWrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          data.map((member) => (
            <div className={styles.card}>
              <TeamCard
                key={member._id}
                name={member.name}
                description={member.description}
                image={member.image}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
