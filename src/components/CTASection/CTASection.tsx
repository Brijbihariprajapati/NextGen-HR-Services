import Image from "next/image";
import Button from "@/components/Button/Button";
import { pageMedia } from "@/data/pageMedia";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          src={pageMedia.cta.src}
          alt=""
          fill
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>NextGen HR Services</p>
        <h2 id="cta-title" className={styles.title}>
          Ready for your next hire or career move?
        </h2>
        <p className={styles.lead}>
          Share a hiring requirement or submit your resume — our consultants
          will guide the next clear step.
        </p>
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
