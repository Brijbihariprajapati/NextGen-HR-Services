import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./PageHero.module.css";

type HeroCta = {
  href: string;
  label: string;
};

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
};

export default function PageHero({
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-hero-title">
      <div className={styles.media}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.aura} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <p className={styles.brand}>NextGen HR Services</p>
        <h1 id="page-hero-title" className={styles.title}>
          {title}
        </h1>
        <p className={styles.description}>{description}</p>
        {primaryCta || secondaryCta ? (
          <div className={styles.actions}>
            {primaryCta ? (
              <Button href={primaryCta.href} variant="ghostLight">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
