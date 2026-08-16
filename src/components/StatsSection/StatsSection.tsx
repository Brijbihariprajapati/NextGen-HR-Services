import { stats } from "@/data/stats";
import Counter from "./Counter";
import styles from "./StatsSection.module.css";

type StatsSectionProps = {
  overlap?: boolean;
};

export default function StatsSection({ overlap = true }: StatsSectionProps) {
  return (
    <section
      className={`${styles.wrap} ${overlap ? styles.overlap : styles.flat}`}
      aria-label="NextGen HR Services in numbers"
    >
      <div className="container">
        <div className={styles.panel}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <p
                className={`${styles.value}${
                  typeof stat.value !== "number" ? ` ${styles.valueText}` : ""
                }`}
              >
                {typeof stat.value === "number" ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.text
                )}
              </p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
