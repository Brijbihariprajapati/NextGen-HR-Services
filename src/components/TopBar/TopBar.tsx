import { contactDetails } from "@/data/contact";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contacts}>
          <a href={`mailto:${contactDetails.email}`} className={styles.item}>
            {contactDetails.email}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className={styles.item}>
            {contactDetails.phone}
          </a>
        </div>
        <div className={styles.right}>
          <span className={styles.tagline}>Trusted recruitment partner since day one</span>
          <a
            href={contactDetails.linkedIn}
            target="_blank"
            rel="noreferrer"
            className={styles.social}
            aria-label="NextGen HR Services on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
