import styles from "./ProcessSteps.module.css";

const steps = [
  {
    title: "Understand the brief",
    copy: "We map role requirements, team context, timelines, and success criteria with precision.",
  },
  {
    title: "Source & screen",
    copy: "Targeted outreach and structured screening to shortlist candidates who fit both skill and culture.",
  },
  {
    title: "Interview & evaluate",
    copy: "Coordinated interview loops with clear feedback so decisions stay fast and informed.",
  },
  {
    title: "Offer & close",
    copy: "Offer support and onboarding handoff to help secure the right hire with confidence.",
  },
];

export default function ProcessSteps() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">Our process</p>
          <h2 className="section-title">How we deliver hiring outcomes</h2>
          <p className="section-lead">
            A clear, consultancy-style process that keeps employers and candidates
            aligned from first conversation to final offer.
          </p>
        </div>

        <ol className={styles.list}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.item}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.copy}>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
