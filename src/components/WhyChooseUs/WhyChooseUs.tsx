import styles from "./WhyChooseUs.module.css";

const points = [
  {
    title: "Specialist hiring focus",
    copy: "Dedicated coverage across IT, non-IT, manufacturing, permanent, contract, and executive search.",
  },
  {
    title: "Quality over volume",
    copy: "Structured screening and role fit assessment so shortlists are relevant, not noisy.",
  },
  {
    title: "Clear communication",
    copy: "Transparent updates for employers and candidates throughout every stage of the process.",
  },
  {
    title: "Flexible engagement models",
    copy: "From single hires to bulk hiring and RPO support — scaled to your business need.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">Why NextGen</p>
          <h2 className="section-title">Built for trust on both sides of hiring</h2>
          <p className={`section-lead ${styles.lead}`}>
            We earn confidence through clarity, disciplined process, and
            dependable delivery for every search.
          </p>
        </div>

        <ul className={styles.points}>
          {points.map((point) => (
            <li key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
