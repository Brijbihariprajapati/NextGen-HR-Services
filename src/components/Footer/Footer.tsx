import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/data/contact";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import NewsletterForm from "@/components/NewsletterForm/NewsletterForm";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <Image
            src="/logo-white.png"
            alt="NextGen HR Services"
            width={1024}
            height={1024}
            className={styles.logoImage}
          />
          <p className={styles.copy}>
            Connecting great talent with great opportunities through end-to-end
            recruitment and talent acquisition solutions.
          </p>
          <NewsletterForm />
        </div>

        <div className={styles.linkGrid}>
          <div>
            <p className={styles.heading}>Company</p>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Services</p>
            <ul className={styles.list}>
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Contact</p>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </li>
              <li>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
                  {contactDetails.phone}
                </a>
              </li>
              <li>{contactDetails.location}</li>
              <li>
                <a href={contactDetails.linkedIn} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} NextGen HR Services. All rights reserved.</p>
        <p className={styles.assurance}>
          Candidate and client data is handled with strict confidentiality.
        </p>
      </div>
    </footer>
  );
}
