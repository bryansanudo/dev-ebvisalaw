import styles from "@/style";

const Benefits = ({ darkMode }) => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className={`${styles.title}`}>
          No Job Offer or Labor Certification Required
        </h2>
        <p className={`${styles.subtitle}`}>
          Similar to the EB-1A Visa, the EB-1B Visa does not mandate a specific
          job offer from a U.S. employer, providing applicants with flexibility
          in the application process.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Permanent Residency</h2>
        <p className={`${styles.subtitle}`}>
          Successful approval of the EB-1B Visa leads to the grant of permanent
          residency, allowing recipients to reside and work in the United States
          indefinitely.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>Path to Citizenship</h2>
        <p className={`${styles.subtitle}`}>
          After maintaining continuous residence as a green card holder for five
          years, individuals become eligible to apply for U.S. citizenship.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>
          {" "}
          Potentially Faster Processing Time
        </h2>
        <p className={`${styles.subtitle}`}>
          The EB-1B Visa is often considered advantageous due to its potentially
          faster processing time, offering an expedited pathway to permanent
          residency.
        </p>
      </div>
      <div>
        <h2 className={`${styles.title}`}>No Numerical Cap</h2>
        <p className={`${styles.subtitle}`}>
          Similar to the EB-1A Visa, there is no specific numerical cap on the
          EB-1B Visa, distinguishing it from certain other employment-based
          categories.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
