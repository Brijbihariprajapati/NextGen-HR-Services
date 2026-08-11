import styles from "./InfoPanel.module.css";

type InfoPanelStep = {
  title: string;
  description: string;
};

type InfoPanelProps = {
  eyebrow: string;
  title: string;
  steps: InfoPanelStep[];
  highlight?: {
    value: string;
    label: string;
  };
};

export default function InfoPanel({ eyebrow, title, steps, highlight }: InfoPanelProps) {
  return (
    <aside className={styles.panel}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>

      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.num}>{index + 1}</span>
            <div>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      {highlight ? (
        <div className={styles.highlight}>
          <p className={styles.highlightValue}>{highlight.value}</p>
          <p className={styles.highlightLabel}>{highlight.label}</p>
        </div>
      ) : null}
    </aside>
  );
}
