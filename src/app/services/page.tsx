import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import Industries from "@/components/Industries/Industries";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import FAQ from "@/components/FAQ/FAQ";
import CTASection from "@/components/CTASection/CTASection";
import {
  EditorialList,
  HighlightBand,
  SplitPromises,
} from "@/components/EditorialBlocks/EditorialBlocks";
import { pageMedia } from "@/data/pageMedia";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT, Non-IT, manufacturing, permanent, contract & C2H, bulk hiring, executive search, and RPO support.",
};

const howWeEngage = [
  {
    title: "Understand the business need",
    copy: "We go beyond the job title — team structure, urgency, must-haves, compensation range, and what success looks like in the first 90 days.",
  },
  {
    title: "Build a focused search plan",
    copy: "Sourcing channels, screening criteria, and interview flow are aligned upfront so delivery stays predictable and hiring managers stay informed.",
  },
  {
    title: "Deliver interview-ready shortlists",
    copy: "Profiles are validated for skills, experience, notice period, and intent — so your team spends time on serious contenders only.",
  },
  {
    title: "Support through closure",
    copy: "Feedback loops, offer discussions, negotiation support, and joining follow-ups keep momentum until the seat is filled.",
  },
  {
    title: "Stay accountable after shortlist",
    copy: "We do not disappear after sending profiles. Drop-offs, replacements, and brief resets are handled with the same ownership.",
  },
];

const outcomes = [
  {
    title: "Faster decision cycles",
    copy: "Clear shortlists and structured feedback reduce back-and-forth, so roles move from open to offered with less friction.",
  },
  {
    title: "Better role fit",
    copy: "We screen for capability and context — not just keywords — so interviews feel purposeful and conversion improves.",
  },
  {
    title: "Flexible hiring models",
    copy: "Permanent, contract & C2H, bulk, executive, or RPO — choose the model that matches demand without changing partners.",
  },
  {
    title: "Lower hiring noise",
    copy: "Fewer unsuitable profiles means hiring managers protect calendar time and stay focused on the right conversations.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Recruitment that moves with your brief"
        description="Permanent, contract & C2H, bulk hiring, executive search, and RPO support — structured delivery for teams that need quality talent without losing pace or drowning in resume clutter."
        image={pageMedia.services.src}
        imageAlt={pageMedia.services.alt}
        primaryCta={{ href: "/employers", label: "Submit requirement" }}
        secondaryCta={{ href: "/contact", label: "Talk to us" }}
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.head}>
            <p className="eyebrow">What we deliver</p>
            <h2 className="section-title">Recruitment built around your brief</h2>
            <p className="section-lead">
              From permanent and contract &amp; C2H hiring to bulk programs,
              executive search, and RPO support — every engagement starts with
              role clarity and ends with usable shortlists your team can act on.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <HighlightBand
        eyebrow="Our standard"
        title="Every service line, one delivery promise."
        copy="Whether you need one specialist or a high-volume drive, you get the same discipline: clear briefs, screened talent, honest updates, and ownership until closure. No generic blasting. No silent gaps between shortlists."
      />

      <EditorialList
        band
        eyebrow="How we work"
        title="A process designed for impact"
        lead="We keep hiring structured so your team can stay focused on evaluating people — not chasing process, status, or unsuitable profiles."
        items={howWeEngage}
      />

      <Industries />

      <SplitPromises
        eyebrow="What you gain"
        title="Outcomes that matter to hiring leaders"
        lead="Services are only useful when they reduce risk, save time, and improve the quality of every interview on your calendar."
        body="That is why every engagement is built around clear briefs, screened shortlists, and ownership through closure — not activity for its own sake."
        items={outcomes}
      />

      <ProcessSteps />
      <FAQ />
      <CTASection />
    </>
  );
}
