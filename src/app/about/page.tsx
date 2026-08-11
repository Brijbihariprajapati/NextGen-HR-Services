import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import StatsSection from "@/components/StatsSection/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import CTASection from "@/components/CTASection/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about NextGen HR Services and our recruitment approach.",
};

const values = [
  {
    title: "Our mission",
    copy: "To help businesses build strong teams and help professionals find work that fits their skills and ambitions.",
  },
  {
    title: "Our approach",
    copy: "Structured, consultative recruitment — not resume forwarding. We take time to understand context before we search.",
  },
  {
    title: "Our commitment",
    copy: "Transparent communication, honest timelines, and long-term relationships over one-off placements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="We help organizations and professionals connect through structured, end-to-end recruitment."
      />

      <StatsSection overlap={false} />

      <section className={`section ${styles.section}`}>
        <div className={`container ${styles.grid}`}>
          {values.map((value) => (
            <div key={value.title} className={styles.card}>
              <h2 className={styles.cardTitle}>{value.title}</h2>
              <p className={styles.cardCopy}>{value.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`section ${styles.note}`}>
        <div className={`container ${styles.noteInner}`}>
          <h2 className={styles.noteHeading}>Full company story coming soon</h2>
          <p>
            Detailed leadership profiles and our founding story will be published
            here shortly. In the meantime, the sections below outline how we work
            and why organizations choose NextGen HR Services.
          </p>
        </div>
      </section>

      <ProcessSteps />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
