import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import Industries from "@/components/Industries/Industries";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import FAQ from "@/components/FAQ/FAQ";
import CTASection from "@/components/CTASection/CTASection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT, Non-IT, manufacturing, permanent, contract, C2H, bulk hiring, executive search, and RPO support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Comprehensive recruitment offerings for businesses that need quality talent at pace."
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <Industries />
      <ProcessSteps />
      <FAQ />
      <CTASection />
    </>
  );
}
