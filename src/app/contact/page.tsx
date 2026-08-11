import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Button from "@/components/Button/Button";
import FAQ from "@/components/FAQ/FAQ";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with NextGen HR Services via email, phone, or LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Reach out for hiring support, career opportunities, or partnership conversations."
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <ContactInfo />
          <div className={styles.actions}>
            <Button href="/employers">Submit Requirement</Button>
            <Button href="/candidates" variant="secondary">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
