import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>
        Explore our Legal Hub Today!
      </h2>
      <p className={`${styles.paragraph} text-dimWhite max-w-[470px] mt-5`}>
        Unleash the full potential of your practice with a comprehensive suite
        of tools. Navigate the legal realm seamlessly and expand your influence
        across borders.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button className={`${styles.button}`}>Get Started</button>
    </div>
  </section>
);

export default CTA;
