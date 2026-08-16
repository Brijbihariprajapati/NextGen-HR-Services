import Image from "next/image";
import Button from "@/components/Button/Button";
import { pageMedia } from "@/data/pageMedia";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.media}>
        <Image
          src={pageMedia.homeHero.src}
          alt={pageMedia.homeHero.alt}
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.aura} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>NextGen HR Services</p>
        <h1 id="home-hero-title" className={styles.title}>
          Connecting Great Talent with Great Opportunities
        </h1>
        <p className={styles.lead}>
          End-to-end recruitment and talent acquisition for businesses across
          technology, professional, and manufacturing domains — with screened
          shortlists, clear timelines, and support from brief to offer.
        </p>
        <div className={styles.actions}>
          <Button href="/employers" variant="ghostLight">
            Find Talent
          </Button>
          <Button href="/candidates" variant="ghost">
            Upload Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
