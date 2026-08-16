import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import EmployerForm from "@/components/EmployerForm/EmployerForm";
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
  title: "For Employers",
  description:
    "Submit your hiring requirement to NextGen HR Services and get screened shortlists across IT, non-IT, and manufacturing.",
};

const steps = [
  {
    title: "Share your requirement",
    description: "Tell us the role, skills, openings, location, CTC, and timeline.",
  },
  {
    title: "Consultant review",
    description: "We refine the brief, confirm scope, and set a clear search plan.",
  },
  {
    title: "Shortlist delivery",
    description: "Receive screened, relevant profiles ready for interview.",
  },
];

const challenges = [
  {
    title: "Urgent roles with thin pipelines",
    copy: "When hiring managers need talent now, we mobilize sourcing quickly, tighten the brief, and keep communication daily until momentum returns.",
  },
  {
    title: "Specialist and niche skill sets",
    copy: "Hard-to-find profiles need focused market mapping, competitor awareness, and patient screening — not generic job-board blasting.",
  },
  {
    title: "High-volume hiring pressure",
    copy: "Bulk programs need process, screening depth, scorecards, and predictable weekly delivery across locations and shifts.",
  },
  {
    title: "Leadership and sensitive searches",
    copy: "Executive roles require confidentiality, judgment, careful candidate handling, and a search narrative that protects both sides.",
  },
  {
    title: "Contract and conversion needs",
    copy: "Project spikes and C2H models need speed plus quality — so teams can validate fit before locking a permanent hire.",
  },
];

const employerGains = [
  {
    title: "A clear search owner",
    copy: "One accountable consultant path — so requirements do not get lost between handoffs, tools, or unclear status updates.",
  },
  {
    title: "Interview-ready candidates",
    copy: "You spend time on people who match the brief, availability, notice period, and compensation reality — not keyword matches.",
  },
  {
    title: "Flexible engagement",
    copy: "Permanent, contract & C2H, bulk, executive search, or RPO-style support as needed, without changing partners mid-stream.",
  },
  {
    title: "Honest market feedback",
    copy: "If the brief is off on CTC, skills, or timeline, we tell you early with options — so you can recalibrate before weeks are lost.",
  },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        title="Hire with confidence, not resume clutter"
        description="Share your requirement and get a clear search plan — screened shortlists across IT, non-IT, and manufacturing, with ownership from brief to offer and first response in 24–48 hours."
        image={pageMedia.employers.src}
        imageAlt={pageMedia.employers.alt}
        primaryCta={{ href: "#requirement-form", label: "Submit requirement" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <SplitPromises
        eyebrow="Why employers choose us"
        title="Hiring support that protects your time"
        lead="We take ownership of sourcing and screening so your leaders can focus on evaluating fit — not hunting resumes, chasing updates, or restarting failed searches."
        body="From urgent specialist roles to bulk drives and leadership searches, you get a clear owner, interview-ready profiles, and honest market feedback when the brief needs recalibration."
        items={employerGains}
      />

      <EditorialList
        band
        eyebrow="Where we help most"
        title="Common hiring challenges we solve"
        lead="From single critical hires to multi-location drives, we adapt the search model to the pressure you are under and the quality you need."
        items={challenges}
      />

      <HighlightBand
        eyebrow="Ready to start"
        title="Share a requirement. Get a plan."
        copy="Send the role details below — job title, openings, location, experience, CTC, employment type, timeline, and JD. Our team typically responds within 24–48 hours with scope confirmation and next steps."
      />

      <section id="requirement-form" className={`section ${styles.section}`}>
        <div className="container">
          <div className={styles.formMedia}>
            <Image
              src={pageMedia.formEmployers.src}
              alt={pageMedia.formEmployers.alt}
              fill
              className={styles.formImage}
              sizes="(max-width: 900px) 100vw, 1180px"
            />
          </div>
          <div className={styles.formHead}>
            <p className="eyebrow">Submit a requirement</p>
            <h2 className="section-title">Tell us what you need to hire</h2>
            <p className="section-lead">
              The more context you share, the faster we can align on a search plan
              and begin sourcing the right profiles for your team.
            </p>
          </div>
          <div className={styles.layout}>
            <EmployerForm />
            <InfoPanel
              eyebrow="What happens next"
              title="From brief to shortlist"
              steps={steps}
              highlight={{ value: "24–48 hrs", label: "Typical time to first response" }}
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
