import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Button from "@/components/Button/Button";
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
  title: "Contact Us",
  description: "Get in touch with NextGen HR Services via email, phone, or LinkedIn.",
};

const whenToReach = [
  {
    title: "You have an open role to fill",
    copy: "Share the JD, openings, location, and timeline — we will confirm scope, ask only what matters, and begin a focused search plan.",
  },
  {
    title: "You need bulk or contract support",
    copy: "High-volume, contract & C2H, or RPO-style delivery needs a structured conversation first so expectations, cadence, and ownership are clear.",
  },
  {
    title: "You are exploring a career move",
    copy: "Submit your resume on the Candidates page, or write to us if you have a specific query about roles, process, or profile fit.",
  },
  {
    title: "You want a partnership discussion",
    copy: "For ongoing recruitment support or multi-location hiring, we are happy to plan a call and map the right engagement model.",
  },
  {
    title: "You need a quick status or clarification",
    copy: "Already working with us? Reach out by phone or email and we will connect you to the consultant handling your requirement or profile.",
  },
];

const responsePromise = [
  {
    title: "Fast first response",
    copy: "Most employer and partnership queries receive a reply within 24–48 hours on business days, with a clear owner assigned.",
  },
  {
    title: "Clear next steps",
    copy: "We do not leave you guessing — you get a direct path: form, call, requirement review, or consultant follow-up.",
  },
  {
    title: "The right channel",
    copy: "Use the requirement form for hiring, the resume form for job search, and email/phone for anything that needs a quick conversation.",
  },
  {
    title: "No runaround",
    copy: "If we are not the right fit for a niche need, we will say so early — so you do not lose time waiting on the wrong process.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's start the right conversation"
        description="Hiring support, career opportunities, or partnership — reach out by phone, email, or LinkedIn, and we will respond with a clear next step within 24–48 hours on business days."
        image={pageMedia.contact.src}
        imageAlt={pageMedia.contact.alt}
        primaryCta={{ href: "/employers", label: "Submit requirement" }}
        secondaryCta={{ href: "/candidates", label: "Submit resume" }}
      />

      <section className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.head}>
            <p className="eyebrow">Talk to us</p>
            <h2 className="section-title">We&apos;re ready when you are</h2>
            <p className="section-lead">
              Prefer a quick call, email, or LinkedIn note — choose what works and
              we&apos;ll respond with the next clear step. For faster hiring or
              resume review, use the dedicated forms below.
            </p>
          </div>
          <ContactInfo />
          <div className={styles.actions}>
            <Button href="/employers">Submit Requirement</Button>
            <Button href="/candidates" variant="secondary">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>

      <EditorialList
        band
        eyebrow="When to contact us"
        title="The right conversation for every need"
        lead="Whether you are hiring, job-seeking, or exploring a longer partnership — start here and we will guide the rest with clarity."
        items={whenToReach}
      />

      <SplitPromises
        eyebrow="What to expect"
        title="A response that moves things forward"
        lead="We keep contact simple: acknowledge quickly, ask only what matters, and point you to the fastest path without unnecessary back-and-forth."
        body="Use the right channel for your need — requirement form, resume form, phone, or email — and we will respond with a clear owner and next step."
        items={responsePromise}
      />

      <HighlightBand
        eyebrow="Prefer action over inbox?"
        title="Start with a form — we handle the follow-up."
        copy="Employers can submit a full requirement with JD upload. Candidates can share a resume securely for job matching. Our consultants take it from there with a clear first response."
      />

      <FAQ />
      <CTASection />
    </>
  );
}
