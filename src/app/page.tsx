import AboutPreview from "@/components/AboutPreview/AboutPreview";
import AudiencePaths from "@/components/AudiencePaths/AudiencePaths";
import Button from "@/components/Button/Button";
import CTASection from "@/components/CTASection/CTASection";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import StatsSection from "@/components/StatsSection/StatsSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AudiencePaths />

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className={styles.servicesHead}>
            <div>
              <p className="eyebrow">Our expertise</p>
              <h2 className="section-title">Recruitment services</h2>
              <p className="section-lead">
                Professional, management, and specialist hiring support across
                permanent, contract, and leadership needs.
              </p>
            </div>
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <Industries />
      <ProcessSteps />
      <Testimonials />
      <WhyChooseUs />
      <AboutPreview />
      <FAQ />
      <CTASection />
    </>
  );
}
