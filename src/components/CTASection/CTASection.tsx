import Button from "@/components/Button/Button";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.panel}`}>
        <div>
          <p className={styles.eyebrow}>Let&apos;s get started</p>
          <h2 className={styles.title}>How can we help your next hire or career move?</h2>
          <p className={styles.lead}>
            Tell us your requirement or share your profile. Our consultants will
            guide the next step with clarity.
          </p>
        </div>
        <div className={styles.actions}>
          <Button href="/employers" variant="ghostLight">
            Hire with us
          </Button>
          <Button href="/candidates" variant="ghost">
            Join as candidate
          </Button>
        </div>
      </div>
    </section>
  );
}
