import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.media}>
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2200&q=80"
          alt="Business professionals in a consulting meeting"
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>NextGen HR Services</p>
        <h1 id="home-hero-title" className={styles.title}>
          Connecting Great Talent with Great Opportunities
        </h1>
        <p className={styles.lead}>
          End-to-end recruitment and talent acquisition for businesses across
          technology and professional domains.
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
