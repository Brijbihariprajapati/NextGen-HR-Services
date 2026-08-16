import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import CandidateForm from "@/components/CandidateForm/CandidateForm";
import InfoPanel from "@/components/InfoPanel/InfoPanel";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
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
  title: "For Candidates",
  description:
    "Submit your resume to NextGen HR Services and get matched with relevant opportunities across IT, non-IT, and manufacturing.",
};

const steps = [
  {
    title: "Submit your profile",
    description: "Share your resume, experience, and preferred direction.",
  },
  {
    title: "Profile review",
    description: "Our consultants match your background against live requirements.",
  },
  {
    title: "Interview support",
    description: "We brief you on the role and guide you through the process.",
  },
];

const candidateBenefits = [
  {
    title: "Relevant opportunities only",
    copy: "We reach out when your profile fits a live brief — not with random, mismatched roles that waste your notice period and energy.",
  },
  {
    title: "Clear role context",
    copy: "Before interviews, we help you understand the role, expectations, team context, and what the client values in a strong candidate.",
  },
  {
    title: "Respect for your privacy",
    copy: "Your resume is used only for recruitment and job-matching. We do not sell candidate data or share profiles without relevance.",
  },
  {
    title: "Support through the process",
    copy: "From first screening call to interview prep and offer conversations, you get guidance that keeps the process clear and professional.",
  },
];

const whatWeLookFor = [
  {
    title: "Clarity in your profile",
    copy: "A clean resume with skills, experience, projects, and recent work makes matching faster and helps us represent you accurately.",
  },
  {
    title: "Openness on preferences",
    copy: "Location, notice period, CTC expectations, shift comfort, and role interest help us avoid wasted conversations on both sides.",
  },
  {
    title: "Professional communication",
    copy: "Timely responses and honest updates on interviews, holds, or offers keep the process smooth for you and the hiring team.",
  },
  {
    title: "Growth mindset",
    copy: "We work with freshers and experienced professionals who want roles that stretch capability — not just a title change.",
  },
  {
    title: "Preparedness for interviews",
    copy: "Candidates who review the brief, ask smart questions, and show ownership stand out quickly in client conversations.",
  },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        title="Your next role starts with the right match"
        description="Submit your resume once. We review profiles against live opportunities across India and reach out when there is a genuine fit — with clear role guidance and respect for your privacy."
        image={pageMedia.candidates.src}
        imageAlt={pageMedia.candidates.alt}
        primaryCta={{ href: "#resume-form", label: "Submit resume" }}
        secondaryCta={{ href: "/contact", label: "Contact us" }}
      />

      <SplitPromises
        eyebrow="Why apply with us"
        title="A partner in your next career move"
        lead="We connect professionals with roles that match their skills and intent — with guidance that makes the interview process clearer and more respectful of your time."
        body="Submit your profile once, stay open about preferences, and we reach out when there is a genuine fit — with role context, interview support, and privacy you can trust."
        items={candidateBenefits}
      />

      <EditorialList
        band
        eyebrow="How to stand out"
        title="What helps us match you faster"
        lead="A strong profile is not about buzzwords. It is about clarity — so we can represent you accurately to hiring teams and move you toward the right conversations."
        items={whatWeLookFor}
      />

      <HighlightBand
        eyebrow="Your data, protected"
        title="Resume shared only for genuine matching."
        copy="Your resume will be used solely for recruitment and job-matching purposes. We do not sell candidate information to third parties. Apply once — we review profiles against live and upcoming requirements across India."
      />

      <section id="resume-form" className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.formMedia}>
            <Image
              src={pageMedia.formCandidates.src}
              alt={pageMedia.formCandidates.alt}
              fill
              className={styles.formImage}
              sizes="(max-width: 900px) 100vw, 1180px"
            />
          </div>
          <div className={styles.formHead}>
            <p className="eyebrow">Apply now</p>
            <h2 className="section-title">Submit your resume</h2>
            <p className="section-lead">
              Tell us who you are, upload your resume, and our consultants will
              review your profile for relevant opportunities across India.
            </p>
          </div>
          <div className={styles.layout}>
            <CandidateForm />
            <InfoPanel
              eyebrow="How it works"
              title="From resume to interview"
              steps={steps}
              highlight={{ value: "Pan-India", label: "Opportunity coverage" }}
            />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FAQ />
      <CTASection />
    </>
  );
}
