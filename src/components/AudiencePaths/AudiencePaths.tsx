import Image from "next/image";
import Link from "next/link";
import { pageMedia } from "@/data/pageMedia";
import styles from "./AudiencePaths.module.css";

const paths = [
  {
    href: "/employers",
    eyebrow: "For employers",
    title: "Work with hiring experts",
    description:
      "Share your requirement and get specialist recruitment support across IT, non-IT, manufacturing, and leadership roles.",
    cta: "Submit hiring requirement",
    image: pageMedia.employersPath,
  },
  {
    href: "/candidates",
    eyebrow: "For candidates",
    title: "Find your next role",
    description:
      "Upload your resume and connect with opportunities matched to your experience, skills, and career goals.",
    cta: "Submit your resume",
    image: pageMedia.candidatesPath,
  },
];

export default function AudiencePaths() {
  return (
    <section className={styles.section} aria-labelledby="audience-paths-title">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">How can we help?</p>
          <h2 id="audience-paths-title" className="section-title">
            Two clear paths. One trusted partner.
          </h2>
          <p className="section-lead">
            Whether you are hiring or exploring your next opportunity, choose
            the path that fits your goal.
          </p>
        </div>

        <div className={styles.grid}>
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className={styles.path}>
              <div className={styles.media}>
                <Image
                  src={path.image.src}
                  alt={path.image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className={styles.body}>
                <p className={styles.pathEyebrow}>{path.eyebrow}</p>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathCopy}>{path.description}</p>
                <span className={styles.pathCta}>
                  {path.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
