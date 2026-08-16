import Image from "next/image";
import Button from "@/components/Button/Button";
import { pageMedia } from "@/data/pageMedia";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">About us</p>
          <h2 className="section-title">A recruitment partner built for clarity and delivery</h2>
          <p className={`section-lead ${styles.lead}`}>
            NextGen HR Services supports growing organizations with structured
            hiring across IT, non-IT, manufacturing, and leadership roles —
            focused on quality shortlists and dependable closure.
          </p>
          <ul className={styles.points}>
            <li>
              <span className={styles.num}>01</span>
              <div>
                <strong>End-to-end delivery</strong>
                <span>Requirement mapping, screening, interviews, and offer support.</span>
              </div>
            </li>
            <li>
              <span className={styles.num}>02</span>
              <div>
                <strong>Domain coverage</strong>
                <span>Technology, professional services, and manufacturing talent.</span>
              </div>
            </li>
            <li>
              <span className={styles.num}>03</span>
              <div>
                <strong>Flexible engagement</strong>
                <span>Permanent, contract &amp; C2H, bulk hiring, and RPO models.</span>
              </div>
            </li>
          </ul>
          <Button href="/about" variant="secondary">
            About NextGen
          </Button>
        </div>

        <div className={styles.media}>
          <Image
            src={pageMedia.aboutPreview.src}
            alt={pageMedia.aboutPreview.alt}
            fill
            className={styles.image}
            sizes="(max-width: 860px) 100vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}
