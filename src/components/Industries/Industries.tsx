import { industries } from "@/data/industries";
import { industryIcons } from "./icons";
import styles from "./Industries.module.css";

export default function Industries() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">Industries served</p>
          <h2 className="section-title">Hiring expertise across sectors</h2>
          <p className="section-lead">
            Our consultants bring domain context to every search, not just
            keyword matching.
          </p>
        </div>

        <ul className={styles.grid}>
          {industries.map((industry) => (
            <li
              key={industry.id}
              className={`${styles.item} ${styles[industry.tone]}`}
            >
              <span className={styles.mark}>{industryIcons[industry.id]}</span>
              <span className={styles.title}>{industry.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
